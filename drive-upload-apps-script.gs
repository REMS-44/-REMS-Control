/**
 * REMS Control - direct upload from student lab to the student's Google Drive folder.
 * Deploy as Web App: Execute as Me; access Anyone with the link.
 * Security: lab key is verified against the public-get Firestore work document and the folder id must match its driveUrl.
 */
const FIREBASE_PROJECT_ID = 'rems-control';
function doPost(e){
  try{
    const q=JSON.parse(e.postData.contents||'{}');
    if(!q.key||!q.folderId||!q.fileName||!q.base64) throw new Error('Неповні дані');
    const url='https://firestore.googleapis.com/v1/projects/'+FIREBASE_PROJECT_ID+'/databases/(default)/documents/rems_directing_lab_work/'+encodeURIComponent(q.key);
    const resp=UrlFetchApp.fetch(url,{muteHttpExceptions:true});
    if(resp.getResponseCode()!==200) throw new Error('Персональний ключ лабораторії не підтверджено');
    const d=JSON.parse(resp.getContentText());
    const driveUrl=(((d||{}).fields||{}).driveUrl||{}).stringValue||'';
    const m=driveUrl.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    if(!m||m[1]!==q.folderId) throw new Error('Папка Google Drive не відповідає лабораторії');
    const root=DriveApp.getFolderById(q.folderId);
    const subName=String(q.subfolder||'Матеріали').slice(0,80);
    const folders=root.getFoldersByName(subName);
    const folder=folders.hasNext()?folders.next():root.createFolder(subName);
    const bytes=Utilities.base64Decode(q.base64);
    const blob=Utilities.newBlob(bytes,q.mimeType||'application/octet-stream',q.fileName);
    const file=folder.createFile(blob);
    return json_({ok:true,fileId:file.getId(),url:file.getUrl(),name:file.getName()});
  }catch(err){return json_({ok:false,error:String(err&&err.message||err)});}
}
function doGet(){return json_({ok:true,service:'REMS Drive upload bridge'});}
function json_(x){return ContentService.createTextOutput(JSON.stringify(x)).setMimeType(ContentService.MimeType.JSON);}
