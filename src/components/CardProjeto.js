import React, { Component } from 'react';

class CardProjetos extends Component {

    constructor(){
        super();
        this.state = {
            likes:0
        }
        this.addLike = this.addLike.bind(this);
    }

    componentDidMount(){
        this.setState({likes: this.props.likes});
    }

    addLike(){
        let novo_likes = parseInt(this.state.likes + 1);
        this.setState({likes: novo_likes});
    }
    
    

    render() {
        return (
            <div className="column">
                <div className="ui card centered">
                    <div className="image"><img src="https://avatars0.githubusercontent.com/u/5585727?s=460&v=4" alt="" /></div>
                    <div className="content">
                        <img src="https://randomuser.me/api/portraits/women/90.jpg" className="ui right floated avatar image" alt="" />
                        <div className="header">{this.props.nome}</div>
                        <div className="meta"><span className="date">{this.props.usuario}</span></div>
                        <div className="description">{this.props.descricao}</div>
                    </div>

                    <div className="content">
                        <span>
                            <i aria-hidden="true" className="chat icon"></i>10 comentários
                      </span>
                        <span href="/" className="right floated botao-like" onClick={this.addLike}>
                            <i aria-hidden="true" className="heart icon"></i>
                            {this.state.likes} likes
                        </span>
                    </div>





                    <div className="extra content">
                        <div className="ui large transparent left icon input">
                            <i className="heart outline icon"></i>
                            <input type="text" placeholder="adicionar comentário..." />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardProjetos;