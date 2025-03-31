// création d'un ecouteur d'evenement sur le bouton pour appeler une fonction d'ajout
const addBtn = document.querySelector('#btn'); 
addBtn.addEventListener('click', addTask); // ajoute une tache à chaque clique 

// création de la fonction d'ajout
const taskCard = document.querySelector('.toDoCard');
const tasksContenair = document.querySelector('#toDoCards');


function addTask(){
    const newTask = taskCard.cloneNode(true) // clone l'element
    const newDeleteBtn = newTask.querySelector('.deleteBtn')
    const newTextAera =newTask.querySelector('.task')

    newTextAera.value = "New Task"  // nouvelle valeure sur la zone de texte
    newDeleteBtn.addEventListener('click', function() {
        deleteTask(newTask); // cible la nouvelle tache 
    });

    tasksContenair.appendChild(newTask) // ajoute une nouvelle tache au contenair 
    compteur()++;
}

const deleteBtn = document.querySelector('.deleteBtn');
deleteBtn.addEventListener('click', function() { // ajoute la fonction supprimer au click          
    deleteTask(taskCard);

});

function deleteTask(task){
    task.remove() // supprime la tache
    compteur()--;
}

// recuperer le nombre de task et new task. trouver un moyen de les compter. mettre à jour le compteur Compteur

function compteur(){
    const nombreDeTaches = tasksContenair.children.length;
    const taskCountElement = document.querySelector('#taskCount');
    taskCountElement.textContent = nombreDeTaches;

}

compteur()