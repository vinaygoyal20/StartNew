import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';

export default StyleSheet.create({
  buttonRect: {
    height: moderateScaleVertical(46),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.themeMain,
    borderWidth: 1,
    borderColor: colors.themeMain,
  },
  fontSize12: {
    fontSize: textScale(12),
    color: colors.themeMain,
    fontFamily:fontFamily.regular,
  },
  fontSize11: {
    fontSize: textScale(11),
    color: colors.themeMain,
    fontFamily:fontFamily.regular,
  },
  fontSize14: {
    fontSize: textScale(14),
    color: colors.themeMain,
    fontFamily:fontFamily.regular,
  },
  fontSize13: {
    fontSize: textScale(13),
    color: colors.grey,
    fontFamily:fontFamily.regular,
  },
  fontSize15: {
    fontSize: textScale(15),
    color: colors.themeMain,
    fontFamily:fontFamily.regular,
  },

  fontSize16: {
    fontSize: textScale(16),
    color: colors.grey,
    fontFamily:fontFamily.regular
  },
  fontSize18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily:fontFamily.regular
  },
  fontSize20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily:fontFamily.regular
  },
  fontSize11Condensed: {
    fontSize: textScale(11),
    color: colors.grey,
    fontFamily:fontFamily.condensedBold
  },
  
  fontSize12Condensed: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily:fontFamily.condensedBold
  },

  fontSize14Condensed: {
    fontSize: textScale(14),
    color: colors.themeMain,
    fontFamily:fontFamily.condensedBold
  },
  fontSize15Condensed: {
    fontSize: textScale(15),
    color: colors.themeMain,
    fontFamily:fontFamily.condensedBold
  },
  fontSize16Condensed: {
    fontSize: textScale(16),
    color: colors.grey,
    fontFamily:fontFamily.condensedBold
  },
  fontSize18Condenesed: {
    fontSize: textScale(18),
    color: colors.grey,
    fontFamily:fontFamily.condensedBold
  },
  fontSize20Condensed:{
    fontSize:textScale(20),
    color:colors.black,
    fontFamily:fontFamily.condensedBold
  },
  fontBold14: {
    fontSize: textScale(14),
    color: colors.themeMain,
    fontFamily:fontFamily.bold,
  },

  fontBold20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily:fontFamily.bold,
  },

  fontBold24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily:fontFamily.condensedBold
  },
  buttonTextTheme: {
    fontSize: textScale(16),
    color: colors.themeMain,
    fontFamily: fontFamily.condensedBold,
    textTransform:"uppercase"
  },

  buttonTextWhite:{
    fontSize: textScale(16),
    color: colors.white,
    fontFamily: fontFamily.condensedBold,
    textTransform:"uppercase"
  },
  
  card:{
    backgroundColor: colors.white,
    shadowOffset:{height:2,width:0},
    shadowRadius:6,
    shadowOpacity:10,
    shadowColor:colors.shadowColor,
    elevation:5,
  },
  headerContainer:{
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
    marginVertical: moderateScaleVertical(28),
  },
  searchContainer: {
		margin: moderateScale(16),
		paddingHorizontal: moderateScale(12),
		borderRadius: moderateScale(4),
		borderWidth: moderateScale(1),
		borderColor: "rgba(0,0,0,0.06)",
		height: moderateScale(44),
		alignItems: "center"
	},
	searchTextInput: {
		flex: 1,
		color: "#000",
		textAlignVertical: "center",
		fontSize: moderateScale(14),
		paddingVertical: 0,
		fontFamily: fontFamily.regular
  },
  loader: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
  },
  
  gymCardStyle: {
    width: moderateScale(170),
    paddingBottom: moderateScaleVertical(16),
    padding: moderateScale(8),
    backgroundColor: colors.white,
    borderRadius: 8,
  },

  screenRootContainer: {
    flex: 1,
  },
});
