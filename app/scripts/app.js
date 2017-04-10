import { render } from 'react-dom'
import React from 'react'
import AppRoot from './views/app_root.js'
//import rootReducer from './reducers/example_reducer.js'

export default function app() {

  //const root = new rootReducer();

  const Link = React.createClass({
    render: function () {
      return (
        <a href={this.props.dest}>{this.props.name}</a>
      )
    }
  })

  const NavBar = React.createClass({
    render: function () {
        return (<nav>
          <Link dest="/blog"    name='Blog'/>
          <Link dest="/about"   name='About'/>
          <Link dest="/contact" name='Contact'/>
        </nav>);
    }
  });

  const BlogPost = React.createClass({

    getInitialState: function () {
      return {
        hidden: true
      };
    },

    hideContent: function () {
      this.setState({
        hidden: !this.state.hidden
      });
    },

    render: function () {
      var bClass = 'panel-body show-content';
      if (this.state.hidden) {
        bClass = 'panel-body hide-content';
      }
      return (<div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}<button className="btn btn-default toggle-btn" onClick={this.hideContent}>
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button></h3></div>
          <div className={bClass}>{this.props.date}<br />{this.props.body}</div>
      </div>)
    }
  });


  const Content = React.createClass({
    render: function () {
      return (<div>
        <BlogPost title="Post Title" date="04/04/04" body="blog post body" />
        <BlogPost title="Next Post " date="04/05/04" body="i'm learning to blog better" />
        <BlogPost title="Third Post " date="04/05/04" body="i'm learning to be a better person" />
        <BlogPost title="Fourth Post " date="04/05/04" body="i'm sick of trying to be a better person" />
        <BlogPost title="Fifth Post " date="04/05/04" body="i'm learning how to pretend i'm a better person" />
      </div>)
    }
  })

  const NewPostForm = React.createClass({

    validateForm: function(e){
      let c = "form-group has-success"
      if (e.target.value.length < 4) c = "form-group has-warning";
      this.setState({formValidity:c})
    },

    getInitialState: function () {
      return {
        formValidity: "form-group"
      }
    },

    render: function () {
      return (<form>
        <div className={this.state.formValidity}>
          <label>New Post Title</label>
          <input value={this.state.value} onChange={this.validateForm} type="text" className="form-control" id="new-post-form" placeholder="Post Title"/>
        </div>
        <div className="form-group">
          <label>New Post Body</label>
          <textarea className="form-control" rows="3" id="new-post-form new-post-body" placeholder="Post Body"></textarea>
        </div>
        <button className="btn btn-default submit-btn" type="submit">Submit</button>
      </form>)
    }

  })

  const AppRoot = React.createClass({
    render: function () {
        return (<main>
          <NavBar />
          <NewPostForm />
          <Content />
        </main>);
    }
  });

  //root.dispatch({"TEST"})
  render(<AppRoot />, document.querySelector('#app'));

}
