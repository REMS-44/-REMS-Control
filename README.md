# REMS Control v45.4.4

Unified stable build based on v45.2.

Key fixes:
- student and teacher views use the same upgraded 1.1 structure;
- old persisted Firestore schema can no longer reintroduce removed 1.1 fields;
- 1.1 now contains only 1.1.1-1.1.6 agreed fields;
- student page restored from stable v45.2 code path;
- chapter label, active navigation, summary Word export, browser spellcheck/text helper, feedback indicators and notifications retained;
- research workspace remains simplified;
- no student answers are deleted by schema upgrade.
