const { createApp } = Vue

createApp({
    data() {
      return {
        completed: [],
        error: null,
        newTask: '',
        tasks: [
            {
                text: 'learn HTML',
                done: false
            },
            {
                text: 'learn CSS',
                done: false
            },
            {
                text: 'learn JS',
                done: false
            },
            {
                text: 'learn PHP',
                done: false
            }
        ],
      }
    },
    methods: {
        addTasks() {

            if(this.newTask.length > 5) {
                this.tasks.unshift(this.newTask)
                //unshift pusha in prima posizione
                this.newTask = ''
                this.error = null
            } else {
                this.newTask = ''
                // cosi si pulisce il valore dell'input
                this.error = 'devi mettere almeno 6 caratteri'
            }
            console.log(this.tasks);
        },

        completeTask(i) {
            this.completed.push(this.tasks[i])
            this.tasks.splice(i, 1)
        },

        checked(i) {
            if(this.tasks[i].done === false) {
                this.tasks[i].done = true
                console.log(this.tasks[i].done);
                
            } else {
                this.tasks[i].done = false
                console.log(this.tasks[i].done);
            }
        }
    }
}).mount('#app')