# Задание

Необходимо создать контактную книгу. Приложение должно состоять из 2-х маршрутов:
* Список контактов:
  * Максимальное число контактов отображаемых за раз 10;
  * Поиск контактов;
  * удалить / изменить / добавить.
    * Удалить - подтвердить действие;
    * изменить / добавить - переход на другую страницу.
* Редактирование контакта - туда пользователь попадет при изменении добавлении нового контакта:
  * Поля имя и телефон должны быть обязательны для заполнения. ( см. пример гет ответа )

## Запросы
* GET /users?_page=${page}&_limit=${limit}&q=${search_string} - список пользователей. Возвращает контакты
* POST /users - Создание нового пользователя
* PUT /users/${id} - редактирование нового пользователя
* GET /users/${id} - информация о определенном пользователе
* DELETE /users/${id} - удаление нового пользователя

## Пример запроса
```sh
// т.к общее кол-во элементов находится в headers нам нужен весь ответ
this.http.get('http://localhost:3000/users?_page=1&_limit=10', { observe: 'response' })
      .pipe(         
        map( (res : any ) => {    
          // вытаскиваем общее кол-во контактов
          res.body.total = res.headers.get('x-total-count'); 
          
          return res.body;
        })  
      )
    .subscribe( data => {
      console.log(data);
    } )  
```

## Пример GET ответа
```sh
{
    "id": 1,
    "name": "Walsh Good",
    "phone": "+7 (843) 537-3958",
    "email": "walshgood@acusage.com",
    "address": "423 Gaylord Drive, Golconda, Mississippi, 8217",
    "company": "APPLIDECK"
}
```

# Запус проекта

`npm run start` - запуск проекта на http://localhost:4200/ ; запуск RESTAPI - http://localhost:3000/

### Примечания
* Проект реализован на [Angular CLI](https://github.com/angular/angular-cli) версии 6.0.0;
* В проекте добавлен [REST server](https://github.com/typicode/json-server);
* Чтоб пощупать как работает restapi можно установить расширение [postman](https://chrome.google.com/webstore/detail/tabbed-postman-rest-clien/coohjcphdfgbiolnekdpbcijmhambjff) и поэксперементировать с запросами.