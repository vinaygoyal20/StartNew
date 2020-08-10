import React,{useEffect} from 'react'
import { View, Text,Image,FlatList } from 'react-native'
import {useSelector} from "react-redux";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import actions from '../../redux/actions'
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';

export default function Home(props) {
    const homeData=useSelector(state=>state.home);
    console.log(homeData,'the value of home data');
    useEffect(()=>{
       actions.getHomeData();


    },[])
    const  _renderItem = ({item, index}) => {
        return (
          <View key={String(index)} >
            <Image
              style={{width: '100%', height: moderateScale(144)}}
              source={{
                uri: item,
              }}
            />
          </View>
        );
      };
    const renderGrid=({item,index})=>{
        console.log(item,'the item vaue')
      return( <Image
            source={{uri:item}}
            style={{width:"19%",height:width*.2,marginBottom:"1%",marginRight:"1%"}}

       />)
    }
    return (
       <WrapperContainer isLoading={homeData.isLoading}>
           <Header />
           <View>
           <Carousel
                
                autoplay={true}
                data={(homeData && homeData.crouselData) || []}
                renderItem={_renderItem}
                sliderWidth={width}
                itemWidth={width}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                loop
               
              />
              </View>
              <Text style={{fontWeight:"bold",fontSize:20,marginVertical:15}}>Images</Text>
              <FlatList
                data={(homeData && homeData.gridData) || []}
                numColumns={5}
                contentContainerStyle={{paddingLeft:"1%"}}
                renderItem={renderGrid}
                keyExtractor={(item,index)=>String(index)}
                ListFooterComponent={()=><View style={{height:10}} />}
              />
              
       </WrapperContainer>
    )
}
