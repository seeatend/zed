
import React from 'react';
import PropTypes from 'prop-types';
import Discord from '../../images/discord_white.png';

class HeaderContent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menuOpen:false,
        };
    }

    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
    }

    handleLinkClick() {
        this.setState({menuOpen: false});
    }

    render(){
        const styles= {
            container:{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: '1001',
                display:'flex',
                alignItems:'center',
                justifyContent: 'space-between',
                width: '100%',
                backgroundImage: this.state.menuOpen?'linear-gradient(to right, #2a2b2c, #2e3035)':'none',
            },
            logo: {
                width: '23px',
                marginRight: '20px'
            },
            body: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                filter: this.state.menuOpen ? 'blur(2px)':null,
                transition: 'filter 0.5s ease',
            },
            line: {
                width: '100%',
                height: '1px',
                background: '#3D3E40',
                margin: '0 auto',
                animation: '0.5s shrink forwards'
            },
            small: {
                fontSize: '11px',
                color: '#88898c',
                margin: '0 10px',
            }
        };
        const menu = ['PRE SALE','STABLE','STUD SOON','LIVE RACING SOON','RACE LOG SOON'];
        const menuItems = menu.map((val,index)=>{
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>
            );
        });

        return(
            <div>
                <div style={styles.container}>
                    <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
                    <img style={styles.logo} src={Discord} />
                </div>
                <MenuList open={this.state.menuOpen}>
                    {menuItems}
                    <div style={styles.line}/>
                    <MenuItem delay={`${6 * 0.1}s`} onClick={()=>{this.handleLinkClick();}}>
                        <span style={styles.small}>ABOUT</span>
                        <span style={styles.small}>TERMS</span>
                        <span style={styles.small}>POLICY</span>
                    </MenuItem>
                </MenuList>
            </div>
        );
    }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover:false,
        };
    }

    handleHover(){
        this.setState({hover:!this.state.hover});
    }

    render(){
        const styles={
            container: {
                animation: '1s appear forwards',
                animationDelay:this.props.delay,
            },
            menuItem:{
                fontSize: '14px',
                fontFamily: 'Montserrat-Regular',
                padding: '1rem 0',
                cursor: 'pointer',
                color: this.state.hover? 'white':'#505154',
                transition: 'color 0.2s ease-in-out',
                animation: '0.5s slideIn forwards',
                animationDelay:this.props.delay,
                textAlign: 'center'
            },
            line: {
                width: '100%',
                height: '1px',
                background: '#3D3E40',
                margin: '0 auto',
                animation: '0.5s shrink forwards',
                animationDelay:this.props.delay,

            }
        };
        return(
            <div style={styles.container}>
                <div style={styles.line}/>
                <div
                    style={styles.menuItem}
                    onMouseEnter={()=>{this.handleHover();}}
                    onMouseLeave={()=>{this.handleHover();}}
                    onClick={this.props.onClick}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}

MenuItem.propTypes = {
    delay: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any
};

/* Menu.jsx */
class MenuList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: this.props.open? this.props.open:false,
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
            this.setState({open:nextProps.open});
        }
    }

    render(){
        const styles={
            container: {
                position: 'absolute',
                top: 0,
                left: 0,
                height: this.state.open? '80%': 0,
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                backgroundImage: 'linear-gradient(#282a2e, #2E3137)',
                color: '#fafafa',
                transition: 'height 0.3s ease',
                zIndex: 999,
            },
            menuList: {
                paddingTop: '55px',
            }
        };
        return(
            <div style={styles.container}>
                {
                    this.state.open?
                        <div style={styles.menuList}>
                            {this.props.children}
                        </div>:null
                }
            </div>
        );
    }
}

MenuList.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.any
};

/* MenuButton.jsx */
class MenuButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: this.props.open? this.props.open:false,
            color: this.props.color? this.props.color:'black',
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
            this.setState({open:nextProps.open});
        }
    }

    handleClick(){
        this.setState({open:!this.state.open});
    }

    render(){
        const styles = {
            container: {
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '20px',
            },
            line: {
                height: '2px',
                width: '18px',
                background: this.state.color,
                transition: 'all 0.2s ease',
            },
            lineTop: {
                transform: this.state.open ? 'rotate(45deg)':'none',
                transformOrigin: 'top left',
                marginBottom: '4px',
            },
            lineMiddle: {
                opacity: this.state.open ? 0: 1,
                transform: this.state.open ? 'translateX(-16px)':'none',
            },
            lineBottom: {
                transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
                transformOrigin: 'top left',
                marginTop: '4px',
            },
        };
        return(
            <div style={styles.container} onClick={this.props.onClick ? this.props.onClick: ()=> {this.handleClick();}}>
                <div style={{...styles.line,...styles.lineTop}}/>
                <div style={{...styles.line,...styles.lineMiddle}}/>
                <div style={{...styles.line,...styles.lineBottom}}/>
            </div>
        );
    }
}

MenuButton.propTypes = {
    open: PropTypes.bool,
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default HeaderContent;