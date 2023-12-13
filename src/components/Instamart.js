import { useState } from "react"

const Section = ({title, description, isVisible,setIsVisible})=> {
    // const [isVisible, setIsVisible] = useState(false) we dont need this because if we want the drop down behaviour of one shoes 
    // and all hide then we need to control the state from the parents
    return(
        <div className="bg-amber-50 shadow-md border border-t-2 border-orange-900 p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            { isVisible ? 
            <button className=" cursor-pointer underline" onClick={()=>{setIsVisible(false)}}>Hide</button> // this toggles the show state to hide          
            :        
            <button className=" cursor-pointer underline" onClick={()=>{setIsVisible(true)}}>Show</button>
            }
            {isVisible && <p>{description}</p> }
 
        </div>
    )
}

const Instamart = () => {
    // const[sectionConfig, setSectionConfig] = useState({
    //     showAbout:true,
    //     showTeam:false,
    //     showCareer:false
    // })
    const [visibleSection, setVisibleSection] = useState("about")
    return (
        <div>
            <h1 className="text-4xl font-bold text-red-950 p-2 m-2">Instamart</h1>
             <Section 
            title={"About Instamart"} 
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
            isVisible={visibleSection === 'about'}
            // isVisible={sectionConfig.showAbout}
            setIsVisible={()=>{
                if(visibleSection === "about"){
                    setVisibleSection("")
            }
                else{
                setVisibleSection("about")
            }}}
            />
            
            <Section 
            title={"Team Instamart"} 
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
            // isVisible={sectionConfig.showTeam}
            isVisible={visibleSection === "team"}
            setIsVisible={()=>{
                if(visibleSection === "team"){
                    setVisibleSection("")
            }
                else{
                setVisibleSection("team")
            }}}          
            />
            
            <Section 
            title={"Careers"} 
            description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
            // isVisible={sectionConfig.showCareer}
            isVisible = {visibleSection === 'career'}
            setIsVisible={()=>{
                if(visibleSection === "career"){
                    setVisibleSection("")
            }
                else{
                setVisibleSection("career")
            }}}
            /> 
        </div>
    )
}

export default Instamart