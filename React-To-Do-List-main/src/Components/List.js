
function List()
{
const lists=[
    {
        id:1
        ,
        name:'mohammadnoor'
        ,
        Job:'Front-End-Enginner'
        ,
        salary:800
    }
    ,
    {
        id:2
        ,
        name:'jim'
        ,
        Job:"Accountnt"
        ,
        salary:350
    }
]
const items=lists.map((list)=>
{
    return   <li key={list.id}>
    Name: {list.name}, Job: {list.Job}, Salary: ${list.salary}
  </li>
})
return(
    <>
        <ul>{items}</ul>
    </>
)
}
export default List