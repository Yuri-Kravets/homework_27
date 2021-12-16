const person = {
  name: 'Yuri'
}

function info(phone,email) {
  console.log(`Имя ${this.name},Тел: ${phone}, Email: ${email}`);
}

info.bind(person,'2-32-232','sd@gmail.com')();



function bind(fn,context, ...rest) {
      return function(...args) {
          const uniqId = Date.now().toString();
        
          context[uniqId] = fn;
  
          const result = context[uniqId](...rest.concat(args));
  
          delete context[uniqId]
  
          return result;
        }
  } 

bind(info, person)('2-21-4-4','sdf@Medt.com');
bind(info, person,'2-21-4-4')('sdf@Medt.com');
bind(info, person,'2-21-4-4','sdf@Medt.com')();