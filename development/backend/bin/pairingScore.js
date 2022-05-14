import read from "../api/crud/read";

// (See https://biologydictionary.net/f1-generation/#:~:text=Filial%20generations%20are%20the%20nomenclature,known%20as%20the%20F1%20generation.)
const P1 = 0.5; // double haploid, so that there is a 50% genetic overlap with P1 (this generally holds for most animals excl. Hymenoptera)



async function getScore(source, target) {
    await read.fetchOne('chicken', target)
        .then(response => console.log(response))
    // console.log(res)
    // check in offspring
    // const grandParents = [source.mParent.mParent, source.mParent.fParent, source.fParent.mParent, source.fParent.fParent]
    // // check in parents
    // return (source.mParent === target || source.fParent === target)
    //     ? P1  // target is direct parent, therefore at least 50% overlap
    //     : source.mParent.children.includes(target) && source.fParent.children.includes(target)
    //         ? 1 // target is sibling, sharing 100% of the genetic code with the source
    //         : source.mParent.children.includes(target) || source.fParent.children.includes(target)
    //             ? 0.5 // target shares one parent with source, genetic overlap likely >= 50%
    //             : grandParents.includes(target)
    //                 ? 0.25 // grandparents, therefore genetic overlap presumed between 25% - 49%
    //                 : 0 // likely genetic code overlap lies between 0-24% 
}



export default getScore;