serial-commands
=================
Async serial queue for commands. 

```javascript

serial-commands = require('serial-commands')([cmnd0,cmnd1],triggerMeWhenDone);

serial-commands.addCommand(cmnd3);
serial-commands.addCommandAt(2,cmnd2);
serial-commands.execute();

```
