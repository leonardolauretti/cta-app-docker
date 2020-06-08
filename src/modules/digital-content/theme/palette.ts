import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const bunker = '#060A0B';
const zeus = '#292218';
const tulip_tree = '#ECAF44';
const judge_gray = '#544A37';
const copper = '#B08335';
const natural_gray = '#898985';

function colorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}


export default {
    black,
    white,
    bunker,
    zeus,
    tulip_tree,
    judge_gray,
    copper,
    natural_gray,
    primary: {
        contrastText: tulip_tree,
        dark: colorLuminance(tulip_tree, -0.6),
        main: colorLuminance(tulip_tree, -0.4),
        light: colorLuminance(tulip_tree, 0.2),
    },
    secondary: {
        contrastText: white,
        dark: colors.blue[900],
        main: colors.blue['A400'],
        light: colors.blue['A400']
    },
    success: {
        contrastText: white,
        dark: colors.green[900],
        main: colors.green[600],
        light: colors.green[400]
    },
    info: {
        contrastText: white,
        dark: colors.blue[900],
        main: colors.blue[600],
        light: colors.blue[400]
    },
    warning: {
        contrastText: white,
        dark: colors.orange[900],
        main: colors.orange[600],
        light: colors.orange[400]
    },
    error: {
        contrastText: white,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400]
    },
    text: {
        primary: tulip_tree,
        secondary: white,
        link: colors.blue[600]
    },
    background: {
        default: '#F4F6F8',
        paper: white
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200]
};