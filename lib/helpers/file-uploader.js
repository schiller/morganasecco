Slingshot.fileRestrictions('veryLargePictures', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  maxSize: 8 * 1024 * 1024 // 10 MB (use null for unlimited)
});

Slingshot.fileRestrictions('largePictures', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  maxSize: 4 * 1024 * 1024 // 10 MB (use null for unlimited)
});

Slingshot.fileRestrictions('mediumPictures', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  maxSize: 2 * 1024 * 1024 // 10 MB (use null for unlimited)
});

Slingshot.fileRestrictions('smallPictures', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  maxSize: 1 * 1024 * 1024 // 10 MB (use null for unlimited)
});

Slingshot.fileRestrictions('microPictures', {
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/gif'],
  maxSize: 1 * 1024 * 1024 // 10 MB (use null for unlimited)
});