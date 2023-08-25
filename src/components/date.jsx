// import { parseISO, format } from 'date-fns';

// export default function Date({ dateString }) {
//   const date = parseISO(dateString);
//   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
// }


export default function DateNow() {

    const date = new Date();

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };


    return (
        <div>
            {date.toLocaleString('en-IN', options)}
        </div>
            
    )    
}
