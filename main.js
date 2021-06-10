Vue.component('task-list', {
    template: `
        <ul>
            <task v-for="task in tasks">{{ task.task }}</task>
        </ul>`,

    data() {

        return {
            tasks: [
                { task: 'task 1', complete: true},
                { task: 'task 2', complete: false},
                { task: 'task 3', complete: true},
                { task: 'task 4', complete: false},
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',

    data() {

        return {
            message: 'Foobar'
        }
    }
});

new Vue({
    el: '#root'
});