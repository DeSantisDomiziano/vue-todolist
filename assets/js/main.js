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
                done: true
            },
            {
                text: 'learn CSS',
                done: true
            },
            {
                text: 'learn JS',
                done: true
            },
            {
                text: 'learn PHP',
                done: true
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
        }
    }
}).mount('#app')