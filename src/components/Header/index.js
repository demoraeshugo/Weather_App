import React, { Component } from "react";

class Header extends Component {
  divStyle = {
    borderStyle: "solid",
    borderWidth: "1px"
  };

  ColorBlue = {
    color: "blue"
  }

  width = {
    width: "300px"
  }

  render() {
    return (
      <div style={this.divStyle}>
        <div style={this.ColorBlue}>Header Component</div>
        <form autoComplete="off" onSubmit={this.props.handleClick}>
          <div className="autocomplete" style={this.width}>
            <input
              id="myInput"
              type="text"
              name="Location"
              placeholder="Location"
            ></input>
          </div>
          <input type="submit" ></input>
        </form>
      </div>
    );
  }
}

export default Header;

/*
<div>
        <div className="Top-Bar">
          <span className="Weather">Weather</span>
          <div className="Search-Bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.121"
              height="32.488"
              viewBox="0 0 26.121 32.488"
            >
              <defs>
                <style>{".cls-1{fill:#555}"}</style>
              </defs>
              <path
                id="search-location-solid"
                d="M25.766 28.088l-5.087-6.326a1.116 1.116 0 0 0-.867-.444h-.832a15.282 15.282 0 0 0 2.245-8.118c0-7.29-4.75-13.2-10.612-13.2S0 5.907 0 13.2s4.75 13.2 10.613 13.2a9.338 9.338 0 0 0 6.531-2.8v1.034a1.729 1.729 0 0 0 .357 1.079l5.087 6.326a1.06 1.06 0 0 0 1.73 0l1.444-1.8a1.8 1.8 0 0 0 .005-2.157zm-15.153-5.755c-4.058 0-7.347-4.083-7.347-9.136s3.283-9.136 7.347-9.136 7.347 4.083 7.347 9.136-3.284 9.136-7.347 9.136zm0-15.226c-2.081 0-3.767 2.1-3.767 4.685 0 2.091 2.462 5.9 3.405 7.288a.416.416 0 0 0 .723 0c.943-1.384 3.405-5.2 3.405-7.288 0-2.588-1.687-4.685-3.767-4.685zm0 6.092a1.4 1.4 0 0 1-1.224-1.523 1.4 1.4 0 0 1 1.224-1.523 1.4 1.4 0 0 1 1.224 1.523 1.4 1.4 0 0 1-1.223 1.524z"
                className="cls-1"
              />
            </svg>
            <input
              className="Search-Bar"
              type="text"
              placeholder="Search.."
            ></input>
          </div>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30.786"
            height="35.184"
            viewBox="0 0 30.786 35.184"
          >
            <defs>
              <style>{".cls-1{fill:#5e5e5e}"}</style>
            </defs>
            <path
              id="calendar-alt-regular"
              d="M10.17 19.791H7.422a.827.827 0 0 1-.825-.825v-2.749a.827.827 0 0 1 .825-.825h2.748a.827.827 0 0 1 .825.825v2.749a.827.827 0 0 1-.825.825zm7.422-.825v-2.749a.827.827 0 0 0-.825-.825h-2.749a.827.827 0 0 0-.825.825v2.749a.827.827 0 0 0 .825.825h2.749a.827.827 0 0 0 .825-.825zm6.6 0v-2.749a.827.827 0 0 0-.825-.825h-2.752a.827.827 0 0 0-.825.825v2.749a.827.827 0 0 0 .825.825h2.749a.827.827 0 0 0 .825-.825zm-6.6 6.6v-2.752a.827.827 0 0 0-.825-.825h-2.749a.827.827 0 0 0-.825.825v2.749a.827.827 0 0 0 .825.825h2.749a.827.827 0 0 0 .825-.825zm-6.6 0v-2.752a.827.827 0 0 0-.825-.825H7.422a.827.827 0 0 0-.825.825v2.749a.827.827 0 0 0 .825.825h2.748a.827.827 0 0 0 .825-.825zm13.194 0v-2.752a.827.827 0 0 0-.825-.825h-2.746a.827.827 0 0 0-.825.825v2.749a.827.827 0 0 0 .825.825h2.749a.827.827 0 0 0 .825-.825zm6.6-17.866v24.185a3.3 3.3 0 0 1-3.3 3.3H3.3a3.3 3.3 0 0 1-3.3-3.3V7.7a3.3 3.3 0 0 1 3.3-3.3h3.3V.825A.827.827 0 0 1 7.422 0h2.748a.827.827 0 0 1 .825.825V4.4h8.8V.825a.827.827 0 0 1 .82-.825h2.749a.827.827 0 0 1 .825.825V4.4h3.3a3.3 3.3 0 0 1 3.297 3.3zm-3.3 23.776V10.995H3.3v20.478a.414.414 0 0 0 .412.412h23.363a.414.414 0 0 0 .412-.412z"
              className="cls-1"
            />
          </svg>
        </div>
      </div>



*/
