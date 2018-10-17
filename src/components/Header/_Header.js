
import React from 'react';
import PropTypes from 'prop-types';
import Discord from '../../images/discord_icon_wht.svg';
import {NavLink} from 'react-router-dom';

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
                width: '20px',
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
                color: '#819099',
                margin: '0 10px',
            }
        };
        const menu = ['PRE SALE','RACE ROSTER','STUD SOON','LIVE RACING SOON','RACE LOG SOON'];
        const menuItems = menu.map((val,index)=>{
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>
            );
        });

        return(
            <div className="app-header mobile">
                <div style={styles.container}>
                    <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
                    <img style={styles.logo} src={Discord} />
                </div>
                <MenuList open={this.state.menuOpen}>
                    {menuItems}
                    <MenuItem delay={`${5 * 0.1}s`} onClick={()=>{this.handleLinkClick();}}>
                        <NavLink to='/about' activeClassName='menu selected' exact={true}>
                            <span style={styles.small}>ABOUT</span>
                        </NavLink>
                        <NavLink to='/faq' activeClassName='menu selected' exact={true}>
                            <span style={styles.small}>FAQ</span>
                        </NavLink>
                        <NavLink to='/bloodline' activeClassName='menu selected' exact={true}>
                            <span style={styles.small}>BLOODLINE</span>
                        </NavLink><br/>
                        <NavLink to='/terms' activeClassName='menu selected' exact={true}>
                            <span style={styles.small}>TERMS</span>
                        </NavLink>
                        <NavLink to='/policy' activeClassName='menu selected' exact={true}>
                            <span style={styles.small} className="item-disabled">POLICY</span>
                        </NavLink>
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
                opacity: 0,
                animation: '1s appear forwards',
                animationDelay:this.props.delay,
            },
            menuItem:{
                fontSize: '14px',
                fontFamily: 'Montserrat-Regular',
                padding: '1rem 0',
                cursor: 'pointer',
                color: this.state.hover? 'white':'#47494E',
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
            <div style={styles.container} className="header-item">
                <div style={styles.line}/>
                <div
                    style={styles.menuItem}
                    className="item-text"
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
                height: this.state.open? '85%': 0,
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
                marginBottom: this.state.open ? '5px' :'4px',
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