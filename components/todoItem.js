import  React  from  ' react ' ;
import  ' ./todoItem.css ' ;

экспорт по  умолчанию  класс  TodoItem  расширяет  React . Компонент {
  конструктор ( реквизит ) {
    супер (реквизит);
  }

  removeTodo ( id ) {
    это . реквизит . removeTodo (id);
  }

  render () {
    возвращение (
      < div className = " todoWrapper " >
        < button class = " btn btn-danger "    onClick = {( e ) =>  this . removeTodo ( это . реквизит . id )} > Видалити < / button > { this . реквизит . todo . текст }
      < / div >
    );
  }
}
