// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      main_title: 'План по изучению Vue.js',
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ]
    }
  },
  methods: {
    startAgain() {
      this.activeIndex
    },
    prev() {
      // когда нажимаем кнопку назад
        // this.activeIndex--
        console.log('Decreasing by 1..', this.activeIndex--)
    },
    reset() {
      // начать заново
      // this.activeIndex = 0
      console.log('Restarting from main point: 0..', this.activeIndex=0)
      // console.log(this.steps.length)

    },
    nextOfFinish() {
      // кнопка вперед или закончить
        // this.activeIndex++
        console.log('Increasing by 1..', this.activeIndex++)

    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.steps[idx].text
      // console.log(this.steps[idx].text)
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг

    // >> can't do this - I have an error: "Uncaught TypeError: can't convert idx to string.. Converting NOT helping..( Request for your advise.."

    // currentStep(idx) {
    //   return console.log(this.steps[idx].text)
    // },

    // 2. выключена ли кнопка назад
    isReset() {
      return console.log('Restarting from main point: 0..', this.activeIndex=0)
    },

    // 3. находимся ли мы на последнем шаге

    // ..no need in this case

    // isFinish() {
    //   return console.log('Restarting from main point: 0..', this.activeIndex=0)
    // }
  }
}

Vue.createApp(App).mount('#app')