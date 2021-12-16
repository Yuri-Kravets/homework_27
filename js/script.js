const person = {
  name: 'Yuri'
}

function info(phone,email) {
  console.log(`Имя ${this.name},Тел: ${phone}, Email: ${email}`);
}

info.bind(person,'2-32-232','sd@gmail.com')();



function bind(fn, context, ...rest) {
  return function(...args) {
      return fn.call(context, ...rest.concat(args));
  }
}

bind(info, person)('2-21-4-4','sdf@Medt.com');
bind(info, person,'2-21-4-4')('sdf@Medt.com');
bind(info, person,'2-21-4-4','sdf@Medt.com')();