serial-commands
=================
Async serial queue for commands. 

```javascript

serialCommands = require('serial-commands')([cmnd0,cmnd1],triggerMeWhenDone);

serialCommands.addCommand(cmnd3);
serialCommands.addCommandAt(2,cmnd2);
serialCommands.execute();

```
