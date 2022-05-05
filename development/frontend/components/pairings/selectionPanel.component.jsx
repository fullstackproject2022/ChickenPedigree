const SelectionPanel = ({ wrapperName, innerClassName }) => {
    return <>
        <section className={wrapperName}>
            <div className={innerClassName}>
                {fRadio
                    ? chickens.map((chicken) => {
                        return chicken.sex === 'F'
                            && <button
                                key={chicken._id}
                                className="female-chickens"
                                onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                    })
                    : mRadio
                    && chickens.map((chicken) => {
                        return chicken.sex === 'M'
                            && <button key={chicken._id}
                                className="male-chickens"
                                onClick={(element) => toggleButtonClicked(element)}> {chicken._id} </button>
                    })
                }

            </div>
        </section>
    </>
}