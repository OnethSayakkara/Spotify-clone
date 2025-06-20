import { Tabs } from "expo-router"

const TabsNavigation = () =>{

    return(
    <Tabs>
   <Tabs.Screen name="favorites"/>
   <Tabs.Screen name="plalists"/>
   <Tabs.Screen name="(songs)"/>
   <Tabs.Screen name="artists"/>
   </Tabs>
    )

}

export default TabsNavigation