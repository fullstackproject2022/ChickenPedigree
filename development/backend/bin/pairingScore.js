import read from "../api/crud/read";

// (See https://biologydictionary.net/f1-generation/#:~:text=Filial%20generations%20are%20the%20nomenclature,known%20as%20the%20F1%20generation.)
const P1 = '≥ 50%'; // double haploid, so that there is a 50% genetic overlap with P1 (this generally holds for most animals excl. Hymenoptera)

const getObject = async (id) => {
    let obj = []
    await read.fetchOne('chicken', id)
        .then(response => obj.push(response))
    return obj[0]
}

const sourceData = async (source) => {
    let sourceObj = []
    let fParent = []
    let mParent = []
    let halfSiblings = []
    let fullSiblings = []
    const temp = []
    await getObject(Number(source.target.innerText)).then(o => sourceObj.push(o))
    sourceObj = sourceObj[0]
    sourceObj.fParent != 0 && await getObject(Number(sourceObj.fParent)).then(o => fParent.push(o)) // get parent object
    sourceObj.mParent != 0 && await getObject(Number(sourceObj.mParent)).then(o => mParent.push(o)) // get parent object
    fParent = fParent[0]
    mParent = mParent[0]
    fParent && temp.push(fParent.children)
    mParent && temp.push(mParent.children)

    if (fParent && mParent) {
        fullSiblings = [... new Set(temp[0].filter(c => temp[1].includes(c)))]
        halfSiblings = [... new Set(temp[0].concat(temp[1]))].filter(c => !fullSiblings.includes(c))
    } else halfSiblings = temp[0]

    return [sourceObj, fParent, mParent, halfSiblings, fullSiblings]
}

const getScore = async (sourceObj, fParent, mParent, halfSiblings, fullSiblings, target) => {
    if (sourceObj.mParent == (!0 && target) || sourceObj.fParent == (!0 && target)) return P1
    else if (fullSiblings.includes(target)) return ' 100%'
    else if (halfSiblings.includes(target)) return '≥ 50%'
    else {
        let q = "< 25%"
        if (mParent && (mParent.mParent === target || mParent.fParent === target)) q = '≥ 25%'
        if (fParent && (fParent.mParent === target || fParent.fParent === target)) q = '≥ 25%'
        return q
    }
}




export { getScore, sourceData };