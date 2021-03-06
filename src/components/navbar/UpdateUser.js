import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "../../assets/styles/UpdateUser.css";
import "../../assets/styles/shared.css";
import DeleteUser from "./DeleteUser";

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edata: [],
      first_name: null,
      last_name: null,
      email: null,
      //   password: "",
      // password: null,
      date_of_birth: null,
      telephone: null,
      country: null,
      hidden: true,
      redirect: false,
      loading: false,
      deleteShow: false
    };
  }

  GetUserById = () => {
    this.setState({ loading: true });
    axios
      .get(
        "http://127.0.0.1:8081/api/v1/auth/" + this.props.match.params.id,
        /*.get(`http://127.0.0.1:8082/api/v1/auth/${localStorage.getItem("_id")}`,*/ {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
        }
      )
      .then(res => {
        const ep = res.data;
        // console.log(ep);
        this.setState({ edata: ep, loading: false });
        // console.log("Existing generated _id - " + this.state.edata[0]._id);
        // console.log(
        //   "Existing date_of_birth - " + this.state.edata[0].date_of_birth
        // );
        // console.log("Existing telephone - " + this.state.edata[0].telephone);
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error + " Greska");
      });
  };

  componentDidMount() {
    this.GetUserById();
  }

  saveInputValue = event => {
    this.setState({ [event.target.id]: event.target.value });
    // console.log(event.target.id);
    // console.log(event.target.value);
  };

  // put/patch
  editUser = event => {
    if (
      this.state.first_name === "" ||
      this.state.last_name === "" ||
      this.state.email === "" ||
      //   this.state.password === null ||
      this.state.date_of_birth === "" ||
      this.state.telephone === "" ||
      this.state.country === ""
    ) {
      alert(
        "All fields must be filled out for successfully Edit-ed User data!"
      );
      // event.preventDefault();
    } else {
      axios
        .put(
          "http://127.0.0.1:8081/api/v1/auth/" +
            /*this.state.edata[0]._id*/ this.props.match.params.id,
          {
            first_name: this.state.first_name || this.state.edata[0].first_name,
            last_name: this.state.last_name || this.state.edata[0].last_name,
            email: this.state.email || this.state.edata[0].email,
            // password: this.state.password || this.state.edata[0].password,
            date_of_birth:
              this.state.date_of_birth /*.toString()*/ ||
              this.state.edata[0].date_of_birth /*.slice(0, 10)*/,
            telephone: this.state.telephone || this.state.edata[0].telephone,
            country: this.state.country || this.state.edata[0].country,
            _modified: new Date()
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
          }
        )
        .then(res => {
          console.log(res);
          this.setState({ redirect: true });
          alert("This User is Edited successfully");
        })
        .catch(err => {
          console.log(err);
          alert(
            "All fields must be filled out to edit your User data succesfuly!"
          );
        });
    }
  };

  delOn = () => {
    this.setState({ deleteShow: !this.state.deleteShow /*signOut: false*/ });
  };

  delOf = () => {
    this.setState({ deleteShow: false });
  };

  render() {
    // console.log(this.props);

    // console.log(this.props.match.params.id);
    // console.log(localStorage.getItem("_id"));
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    const NavbarSur = this.props.component;
    // console.log(NavbarSur);
    return (
      <React.Fragment>
        <NavbarSur toggle={false} />
        <div id="update-user">
          <div id="user-main-container">
            <div id="user-maintitle">
              <h1>Edit User Data</h1>
            </div>
            <div className="user-form-container">
              <div id="user-fpage">
                {this.state.edata.length > 0 ? (
                  <div>
                    <p className="input-container">
                      <label className="eplabel">First Name</label>
                      <input
                        type="text"
                        className="eptextfield"
                        id="first_name"
                        onChange={this.saveInputValue}
                        defaultValue={this.state.edata[0].first_name}
                      />
                    </p>
                    <p className="input-container">
                      <label className="eplabel">Last Name</label>
                      <input
                        type="text"
                        className="eptextfield"
                        id="last_name"
                        onChange={this.saveInputValue}
                        defaultValue={this.state.edata[0].last_name}
                      />
                    </p>
                    <p className="input-container">
                      <label className="eplabel">E-mail</label>
                      <input
                        type="text"
                        className="eptextfield"
                        id="email"
                        onChange={this.saveInputValue}
                        defaultValue={this.state.edata[0].email}
                      />
                    </p>
                    <p className="input-container">
                      <label className="eplabel">Date of Birth</label>
                      <input
                        type="date"
                        max="2999-12-31"
                        className="eptextfield"
                        id="date_of_birth"
                        onChange={this.saveInputValue}
                        defaultValue={this.state.edata[0].date_of_birth.slice(
                          0,
                          10
                        )}
                      />
                    </p>
                    <p className="input-container">
                      <label className="eplabel">Telephone</label>
                      <input
                        type="text"
                        className="eptextfield"
                        id="telephone"
                        onChange={this.saveInputValue}
                        defaultValue={this.state.edata[0].telephone}
                      />
                    </p>
                    <p className="input-container">
                      <label className="eplabel">Country</label>
                      <input
                        type="text"
                        className="eptextfield"
                        id="country"
                        onChange={this.saveInputValue}
                        defaultValue={this.state.edata[0].country}
                      />
                    </p>
                    <div id="btnsEp">
                      <button
                        type="button"
                        className="eu-button"
                        onClick={this.editUser}
                      >
                        SAVE
                      </button>
                      <Link to="/products">
                        <button className="eu-cl-button">CLOSE</button>
                      </Link>
                    </div>
                    <button id="delete-user-btn" onClick={this.delOn}>
                      DELETE USER
                    </button>
                  </div>
                ) : (
                  <h2>Loading...</h2>
                )}
              </div>
              <div id="user-right-page">
                <p id="user-simbol">
                  <i className="fas fa-plus-circle" />
                </p>
                <p id="user-title">You are editing an existing User data</p>
              </div>
            </div>
          </div>
        </div>
        {this.state.deleteShow ? (
          <DeleteUser
            clDelUser={this.delOf}
            userId={this.state.edata[0]._id}
            fullName={`${this.state.edata[0].first_name} ${this.state.edata[0].last_name}`}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
export default UpdateUser;
