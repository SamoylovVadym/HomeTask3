import  React  from  ' react ' ;
import  ' ./todoInput.css ' ;

экспорт  класса по умолчанию  TodoInput расширяет React . Компонент {   
  конструктор ( реквизит ) {
    супер (реквизит);
    это . state  = {значение :  это . реквизит . todoText };

    это . handleChange  =  this . handleChange . bind ( this );
    это . addTodo  =  это . addTodo . bind ( this );
  }

  handleChange ( e ) {
    это . setState ({значение :  e . target . value });
  }

  addTodo ( todo ) {
    if ( todo . length  >  0 ) {
      это . реквизит . addTodo (todo);
      это . setState ({значение :  ' ' });
    }
  }

  render () {
    возвращение (
      < div >
      < div class = " blockInline " >
        < input class = " form-control " type = " text " placeholder = " Введіть ваші справи сюди ... " value = { this . состояние . value } onChange = { this . handleChange } / >
        < / div >
        < div class = " blockInline " >
        < button   class = " btn btn-info "   onClick = {() =>  this . addTodo ( это . состояние . значение )} > Додати < / Кнопка >
        < / div >
      < / div >
    );
  }
}
