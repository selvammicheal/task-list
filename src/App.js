import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [addNewTask, setaddNewTask] = useState([])
  const [updateDate, setUpDateDate] = useState('');
  const [updateState, setUpdateState] = useState('');

  console.log(addNewTask,"updateState")

  const updateChanges = (value) => {

    setUpDateDate(value)
  }
  const saveData = () => {
    const maindata = [...addNewTask]
    const newList = {
      value: updateDate,
      edit: false,
    }
    maindata.push(newList)
    setaddNewTask(maindata)
  }
  const taskDelete = (index) => {
    // console.log(index)
    const delect = [...addNewTask]
    delect.splice(index, 1)
    setaddNewTask(delect)
  }
  const editTask = (index) => {
    const editdate = [...addNewTask]
    editdate.map((item) => item.edit = false)
    editdate[index].edit = true
    setaddNewTask(editdate)

  }
  const updateTaskList = (index) => {
    const updatevalue = [...addNewTask]
    updatevalue[index].value = updateState
    updatevalue[index].edit = false
    setaddNewTask(updatevalue)
    // console.log(updatevalue[index])
  }
  console.log(addNewTask)
  return (
    <div>
      <div className='task-heading'>
        <div className='main-wrap'>
          <h2>Add Task</h2>
          <div className='input-box'>
            <input type='text' className='' onChange={(e) => updateChanges(e.target.value)} />
            <button className='main-save-btn' onClick={() => saveData()}>Save</button>
          </div>
        </div>
        <div className='main-box'>
          <h3>Task</h3>
          <div className='d-flex task-list '>
            <div className='main-top-heading'>
              {
                addNewTask.map((main, index) => (
                  <>
                    <div>
                      {main.edit ?

                        <div className='input-box'>
                          <input type='text' className='' defaultValue={main.value} onChange={(e) => setUpdateState(e.target.value)} />
                          <button className='main-save-btn' disabled={updateState != "" ? false : true} onClick={() => updateTaskList(index)}>Update</button>
                        </div>
                        :
                        <>
                          {main.value}
                        </>
                      }



                    </div>
                    <div className='main-btn mx-5'>
                      <button className='main-btn btn-edit' onClick={() => editTask(index)}>Edit</button>
                      <button className='main-btn btn-delete' onClick={() => taskDelete(index)}>Delete</button>
                    </div>
                  </>
                )

                )

              }
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default App;
