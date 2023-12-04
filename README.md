# ТЗ

Написать React приложение.

Блоки 1 и 2 центрированы по вертикали, блок 1 при этом анимирован и двигается периодически вверх и вниз на 100% своей высоты с длительностью анимации 5 секунд.
При нажатии на кнопку "START" запускается анимация полета круга из блока 1 в блок 2, блок 1 при этом продолжает двигаться по вертикали, круг должен в результате попасть в центр блока 2, длительность анимации 2 секунды. 
После запуска анимации кнопка "START" дизейблится и на ней появляется таймер обратного отсчета времени анимации.
После завершения анимации круг исчезает. Кнопка "START" становится активной лишь после достижения 0 секунд.

Нужно учесть, что во время анимации полета круга, пользователь может изменить размеры окна, круг должен обязательно попасть в центр блока 2. Блоки, кнопка и круг должны быть отдельными компонентами. 

ЗАПРЕЩЕНО использовать какие-либо библиотеки, кроме react и библиотек необходимых для сборки и кодстайла.

## Available Scripts
### `npm start`
