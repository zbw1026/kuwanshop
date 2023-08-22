(function() {
  // 创建扩展对象
  var myExtension = {
    // 定义扩展ID
    id: 'myextension',
    
    // 定义扩展名称
    name: 'My Extension',
    
    // 定义扩展块
    blocks: [
      // 块1：打印消息
      {
        opcode: 'printMessage',
        blockType: Scratch.BlockType.COMMAND,
        text: '打印消息 [message]',
        arguments: {
          message: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Hello!'
          }
        }
      },
      
      // 块2：获取随机数
      {
        opcode: 'getRandomNumber',
        blockType: Scratch.BlockType.REPORTER,
        text: '随机数在 [min] 和 [max] 之间',
        arguments: {
          min: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 0
          },
          max: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 100
          }
        }
      }
    ],
    
    // 定义块1的实现
    printMessage: function(args) {
      var message = args.message;
      console.log(message); // 这里将消息打印到控制台，你可以根据需要进行定制
    },
    
    // 定义块2的实现
    getRandomNumber: function(args) {
      var min = args.min;
      var max = args.max;
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  };
  
  // 注册扩展
  Scratch.extensions.register(myExtension);
})();
