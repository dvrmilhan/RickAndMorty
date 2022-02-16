import React from 'react'
import styles from './Cards.module.css'

const Cards = ({results}) => {

    let display
    if (results) {
        display = results.map(xd =>{
            let {id ,name, location, status ,species,type ,gender , image}= xd

            return( 
            <div key={id} className="col-3 position-relative mb-4"> 
                <div className={styles.cards}>
                    <img src={image} alt="" className= {`${styles.img} img-fluid`} />
                    <div className={`${styles.content}`}>
                        <div className="fs-3 fw-bold mb-4">{name} </div>
                        <div className="">
                            <div className="fs-6">Last Location - {location.name}</div>
                            <div className="fs-6">Species - {species}</div>
                            <div className="fs-6">Gender - {gender}</div>
                            <div className="fs-6">{type}</div>
                        </div>
                    </div>
                    </div> 
                    {(() => {
                        if (status === "Dead") {
                        return (
                            <div
                            className={`${styles.badge} position-absolute badge bg-danger`}
                            >
                            {status}
                            </div>
                        );
                        } else if (status === "Alive") {
                        return (
                            <div
                            className={`${styles.badge} position-absolute badge bg-success`}
                            >
                            {status}
                            </div>
                        );
                        } else {
                        return (
                            <div
                            className={`${styles.badge} position-absolute badge bg-secondary`}
                            >
                            {status}
                            </div>
                        );
                        }
                    })()}
               
            </div> )
        })
    }else{
        display = "No Charecter Found"
    }

  return (
    <>{display}</>
  )
}

export default Cards