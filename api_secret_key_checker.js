Java.perform(function () {
    var targetApp = 'com.example.targetapp'; // Replace with the actual package name of the app you want to inspect
    var targetClass = 'com.example.targetapp.SecretKeys'; // Replace with the actual class containing the keys
    
    var target = Java.use(targetClass);
    var fields = target.class.getDeclaredFields();
  
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      field.setAccessible(true);
      var value = field.get(target);
  
      console.log('[+] Found potential key:', field.getName(), value);
    }
  });