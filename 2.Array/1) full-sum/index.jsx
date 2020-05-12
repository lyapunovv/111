import React from 'react';
/**
 * @name Full-sum
 * @task
 * Написать функцию суммирования, которая будет суммировать все аргументы и возвращять результат
 * Если хотя бы один из арументов не является числом, сгенерировать ошибку c сообщением: "Wrong Argument Type"
 * Если аргументов не будет, пусть вернется 0
 * @param args
 */
const a = 9;


function fullSum(...args) {
  // Напиши свой код здесь
  console.log('LOOOOG', args, a);
}

window.fullSum = fullSum;


class Component extends React.component {
  constructor() {
    super();

    this.state = {
      config: false,
    };
  }

  render() {
    return <div>ddd</div>
  }
}
export default Component;
