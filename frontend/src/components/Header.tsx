

export default function Header(){
    const date = new Date()
    const today= date.getDate()
    const month=date.getMonth()
    const time=date.getTime()
    const hour=date.getHours()
    const minute=date.getMinutes()

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];


    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      
      const monthName=monthNames[month]

return<>

<nav className="bg-slate-600     border-cyan-600 h-14">

<div className="text-2xl p-3">
    {hour + ":" + minute + "." + day + "     "+monthName}
</div>
 
</nav>
</>
}