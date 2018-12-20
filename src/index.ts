import '../styles/main.less';

const inputName = <HTMLInputElement>document.getElementById('name');
const submitBtn = <HTMLInputElement>document.getElementById('submit');
const output = <HTMLInputElement>document.getElementById('output');
class Person {
  phrase: string;

  constructor(public name: string) {
    this.phrase = `Hello ${name}!`;
  }
}
function greeting(person: Person) {
  return person.phrase;
}
submitBtn.addEventListener('click', () => {
  const inputNameData = inputName.value;
  const user = new Person(inputNameData);
  output.innerHTML = greeting(user);
});
