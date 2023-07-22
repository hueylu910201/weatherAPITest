export default function Description({description,comfortability}){
    return(
        <div>
            <p style={{fontSize:'1rem'}}>{description} {comfortability}</p>
        </div>
    );
}