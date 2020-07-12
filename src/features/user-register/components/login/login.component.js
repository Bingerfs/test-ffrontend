import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from '../../services/auth.service';

import {
  Grid, Paper, Container, Typography
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {
  InputText,
  ErrorMessage,
  ButtonA,
  InputPassword
} from '../../../../shared/components/form/index';
import { Formik } from 'formik';
import { Redirect, Link as RouterLink } from 'react-router-dom';
import LoginValidations from './login.validations';
import styles from './login.css';



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      loginFields: {
        password: '',
        username: ''
      },
      loading: false,
      message: "",
      isTheLoginSuccessful: false,
      isSubmitting: false,
      isTheLoginEnded: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
/*   logIn(username, password){
    const usernameTrimmed = username.trim();
    const passwordTrimmed = password.trim();
    this.setState({ isSubmitting: true });
    try {
      const response = await this.state.loginService.logIn(usernameTrimmed, passwordTrimmed);
      localStorage.setItem(ID_TOKEN, response.data.id_token);
      localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
      localStorage.setItem(
        ACCESS_TOKEN_EXPIRATION_TIME,
        this.getTheTokenExpirationTime(response.data.expires_in).toString()
      );
      this.setState({ isTheLoginSuccessful: true, isTheLoginEnded: true, isSubmitting: false });
    } catch (error) {
      this.setState({ isTheLoginEnded: true, isSubmitting: false });
    }
  }
 */
  logIn(username, password) {
    const usernameTrimmed = username.trim();
    const passwordTrimmed = password.trim();
    this.setState({ isSubmitting: true });
    AuthService.login((usernameTrimmed, passwordTrimmed)).then(
        () => {
          this.setState({ isTheLoginSuccessful: true, isTheLoginEnded: true, isSubmitting: false });

          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
  
  }

  render() {
    return (
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
     >
      <Formik
        initialValues={this.state.loginFields}
        validationSchema={LoginValidations}
        onSubmit={(values) => {
          this.logIn(values.username, values.password);
        }}
        render={({
          values, errors, handleChange, handleBlur, touched, handleSubmit
        }) => (
          <>

            <Container maxWidth="xs" className={styles.login}>
              <Paper>
                <Container maxWidth="xl">
                  <Grid container justify="center" alignItems="center">
                    <Avatar
                      sizes="90px"
                      style={{
                        margin: "10px",
                        width: "90px",
                        height: "90px",
                      }}
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExIVFRUXFhgYFRYVFRcaFxcWGBcWGBUYGBgYHSggGBslGxUWITEiJSkrLjAuGSIzODMtNygtLisBCgoKDg0OGxAQGy0mHSYtLS0tNS0tLS0vLS0tLS0tLSsvLS0tLS4tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIEBQYDBwj/xABDEAACAQIEBAQDBQYFAwIHAAABAgMAEQQSITEFE0FRBiJhcTKBkRQjQqGxBzNScsHwFWKS0eFDgtLC8RYXJFNzk7L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QAKxEAAgIBAgUDBAIDAAAAAAAAAAECEQMhMQQSE0FRIjJxBWGhscHRI1KR/9oADAMBAAIRAxEAPwD3CiiioAUUUUAUUUUAUUVU8R4sUYoigkAEsT5Vvfftt1I3FSk3sQ5JblqTUDE8YiTQHOeya/nt+dZ/FYp5dSSV65mAjv1toAfaxNJh8Kz/AAo7+otGn+prk/QVcsSSuTKHmb0iizk8QHpGAPVv6WqJ/jcx1DJYbm1lHuSa6QcKYki8KEWvvKwvtfObD6U/FcKeynO8pB+FBGgHrrp0/Ou/8aOH1WVhhZruQ7X1LclyD63NifkK52BIsysdgNbg9yrAGrqKXEqQGVSemZrNb/sv9bVNmjZxZgns1iL26+Tp6Wqeq0QsVlVHCWBDF1Oxsi5CLbkFVqFGIRGdCzhiCcovbUjQPdRbS47air6LhsIHnjjY9gi5fzFS4QqaKqqOyi36Vx1PB30vJl4sO4GdBIFOoKgNcepiYE/6T7VIg4vMouGDqNzbMB/MQAyn+YVYtgXWQGJlVPxD8/h2J9bg2p+KwkbsCwKv0kQ5WPoSN6lzT3IWNrZnPDeIVPxIR6qQw/of1qzw2Njk+BgT1GxHuDqKpsRwQnVWEncOoD/J1yn61XRzNE5K3Ur8SuNVB/i/iQ/xfWo5ISXp3J6k4+7Y2VFQOH8USXT4W/hPX+U9anBgdiKoaadM0KSatC0UUVBIUUUUAUUUUAUUUUAUUUUAUUUUAVC4hxFYtPiY7KN/c9hTuJYwRodbMQcuhOtu3b5isnI5J6szHU7kk1dix82r2KcuXl0W5IxONklazNYH8N7IB3Pf51xaICyk5gNVQDKGJ2J9PXfYaU+aDIoU2JJ81jr6KDY/OrDA8PbrHHEpGinVmNxq+xYelx7VdJqK0KIpyeo7h+Gi+N2EjAdP3aDsCPL8v/erfMT/AMbUhHrpYAAAfkO1LGoGwsO3/FZ27NMVQ231O+ny170tq7CkNQdUcg3v9aBeulFANUU56KWgOVqQr6V3pRQUccprji8KkoGbRh8LjRlPof6bGptcnFA0Z2ThDg5dS2pFrAML6FPwgjTynLrqDUaQsCWH74H4gCkhG3mUjzm9hcXuNNdK1NjQ1jowBG2oGx0PuK76j7lXSXY5cP4mkui3va5BHrYj3B/UVOrNTYGWN2dNCpJDW0ZOl99QNDcagelxacL4oJfKwyv26H1Xv/e41rmUO8djqE3tLcsaKKKrLQooooAooooAooooAqLxDHJCt23OiqN2PpT8ZieWt7EnZVF7seg0/u1ZWPHMWaU2aQ6LmBKovUgfkPnf1sxw5irJk5dBk87ysXY2NtLggADXS+w9eppI0ZRfZmHl7gHdu4vsPc9qcZGazuxffKG2Y+ij8I6ke1XvD8EFXO1zI2pJ0I/8R07+1aJS5VRmjDndiQcLiGXym4INz8TW6WPwrextpsL1OJuf7/WjU/3/AHpTlWszbe5rSS2EVaeKKS9DoWkpL0UIC9F6SigFvS3ptLQDqW9MpaEjgaW9NBpb1AFNMZb069LegOWo/vT/AIqk4zgstpUJCgk//jYkXPopI1/hOuxar96jMNNdddu41U6ddDsalOnZzKKao5cH4lzRlbSQbja42uB+oqyrOxcNKOyC62JaFwfhBGqkfiAI2O4vVtwzG81dRZ1JV17MDY27g2NjUzit1sRCT2e5MoooqssCiiigCiiuWJmCKXOwF/8AgUBXcdxeUcsfEw1PUL1+Z2+RrPoik/5Rq1u3YepNgPelxUpYlj8THX/YegGlTMBgs7Zb+VbM5/iY9PYC4+p7VtS5IGGUnkkTeD4YW5zAFj8PZQNBb07enuashS3/AL7DoKfaszduzXGNKhAKWg02oJFopKKAWkoooAooooAooooApaSigFvS3ptLQDqUUwU4UJFtXORK6iltUAhYuNmQhCM41TNtcdD+nzqqiPLxerEZiQbWtchDY6ar5lHfT3q8kHb+z0qi43hW5gZQSJCtiPwuBl19CAp909asg+zKcqrU0tFR+H4oSxq46jUdmGjA+oIIqRVTL07CiiioAVTeIpWAVRs1yddTa2lu3W/pVzWV4xic0rdl8o+XxfmT9KtwxuRVmlUSG6XIAFydhVhwqAmTMpuq6lu5y2Nu9zt7X7VFw8LM2Rfjbf8Ayr1Hv39NOtaSGFUAVRoPzPc1dln2KMULdjgK6U0Co3E+IJAmdybXsANyewqhJt0jRKagnKTpIlGkrPJ4vgJ1SQfIf71Z4Li8M2iSAn+E6N9DVksOSO6KMfGYMjqM1ZOoooqo0hRRRQBRRS2oBKKW1JQBRTeYubLcZrXy3F8oIBNt7XIF/WlZgNzb/nQUAtFFFALSikooB9OBpgpwqCRrLeueo0/9jXeo770IZVxzcvE2B8sh1HTPZQGHuMgPrer6qHG4R2MUgAUjI7ruQQ12Ct13e/yq+FTOtDmF6oKKKK4LDlipMqM3YE/lWOjaxvbUI1v5rb6/WtB4insgW9sx19l1/XLVDHq6juwHyJtWrCqi2zJnl6ki84MEEYygBtnINzpe1+196j+KvEMOAw5nludcsaL8Ukh+FFHf9BT+Ajytp+K1+9gdP7715Lx/jn2zjDSHzYfhwYou6mSM+ZrdTnBPqIh31hQ5pPwXY7aSR6/4dkmaBXxBXmtdnVPhjNz90D1yWykncg+wzHjeZjOqfhVAR7km5/IfSq/9i/ixcThjhZX/APqIi7a7yRuxcsO9mYg/LvWz47wZcQo1yuvwt/Q+lWYmsOb1mP6hhnn4dxhv+zzsU4GpGO4fJC2WRSOx6H2NRq9hNSVo+LnGUJVJUzU+HvERuIpmuDorncdg3f3rXV5RW+8LY8yw2Y3ZDlPqLeU/TT5V5vGcOo+uJ9J9I4+WR9HI7fb+i5paKW1eee+FqK8k454sxS45uJR+bhuElGDlAJ84e32iYC2uV+WBbey92r1uKRWUMpBVgCpGxBFwQe1qgmgqu4rI4MYz8uNmKu6gFwxtywCwIUMQy3sTcqBa9xxxWLklmbDxMI8gBke1212Cg++9LxeAJhHRubLcZbqTzLswAcMozLlJDZlBK5bgG1dyjS1KYZVOTUVou/3M/wCLPEOA4dHDNmXMS0iOpMjzZMivGW1LllktdjYEAk+UCtRgOKQT/upVfyhrqbjK2xB67fLrXjX7O/AcONz4lneZM7D7ROt+ZJ+NooXJBtp95LmuRbILXrV8Z8HYzBJJi+HY/ENKozPDiSkkcypqUACgJpewAt0GXccIuPRqKpfBnH14hhIcUoy5x5lvfK6nK637XBt6Wrzjwlw+abh+Ixv+JYyGWKXEZXOIZoQsWqh45Lgr9DUkHsNKKzvgDi02L4fh8RiFyyupLWFgwDMFcDpmUBvnWR4BwUY/HcT52JxYEOJyRrFiZEVVIYkAA+lAepUoqFwrALBEsKs7KtwGkcu5uSfMzanesjxDxVi8XO+E4UkZ5Ry4jGTXMMTdUjA/eONe4+WtQSb0VyZKz3hjw5iMPI02I4jPi3ZMpVwqQjzBsyRrop0te+xrT0BBlQm1rbjftsw+l6mxjSor711wspYaix/pc5T9Kl7ELc70UUVwdFD4mYWVbC9icx3UXW4Hv/SqfBt5lY7KQT69gPUmpXH5WMrBugGX+W1/rcn6U7AYdC9n0VI8za26Akk9tfyrbD049TDP1ZNDvgHeOJ2toFLLrpm109SbLXz94YhY4fE3vnkLob/FmGHxBt7lntbvavRf2zYvGYdsO0WIcwyuo+yKi6tEVcZSq5mU5RcX39NAnizAQDFmLA4dvtDhMcxBYrIGZlORCbDUgttvVcpuMHJLfX/h6fAQg80YydLVW/un/J41gcW8TrLE7I6nMjqbFT3Br2bwb+1+NwsWPHLfYToPu27Z1GqH1F1/lrI+Kv2ZYrDrFLBDJKjozyIAubDnMWEZsTcBCoza6qx6gVf8R8HcMTgwxStiLhRiA33f2giUKiI4tYR3ym+wsT1N9mSeLJFX3MnLKLaPXgYp4wQUkjYXBBDKw7gjQ1l+NeFyoLw3I6p1H8p6+29eIeEfF2K4a6tGSYm8zQtflyLcgsl/hNwwzDqNb2tX0nwjiSYmCPERk5JEDrfex6H1BuD7VTJZOGlaehm4jhcXExqa189zzStJ4HltK690v9CP/KonivCiPEHLoHAa3qSQfzF/nU3wNDeSR+yhfqb/APprbmmp8O5eT5vg8MsXHLH3TZshWW/aPx18LhMkGuKxLCDDKN+Y+hYfyg3vte3etVWfxnhYS8Sgx7ylhBEyRwlfKsjHWQNf+EkWI6LrpXin2RmeD8L4hDgF4cOFQGLlGN8+OHnL35jkLFoSST6adq6/sl4nNEJeEYvy4nCWya3z4drFSp/EFuBfsy+teiis3xnwks2PwvEElMUkAZZMqg86Mg2RidgCW110J62Igkn8U4KJW5qMY5QNHXr6MOoqtbFTYjAYpf8ArCOaNSuzPyyFI+ZFW/EMBJK1ucyR21VAAxOt/P0G1ScJhUiQIgyqNh/fWrXJclPV/oyRxNZuaKpd/u/j+TF/sYxMb8IwwS3k5iOBa4fmMTe3cMD7EVrOK49MPDJPIQEjRnYnsBe3udretZPFeBJYcQ+J4bjDhDKc00LRiWCRv4gpIyHU7X30tTZvBOJxbL/iWP58KkMMNDEIYmYagyEEs49PSqzUM/YlgHh4VDnFjI7ygHorNZfqFB+dY7wb4GHEcBKWxmIitip8sQKNh8yspDPCV8+tr3PSvakUKAAAALAACwAGwA6CvP8AhP7NXjiaCTiWIaB5GdoYVWEMXN2DMCzlTsRehBP/AGWeIJsZg2M4QvDK8HMjFklCBbOoAAG9tNNOmwz3hjhE0+O4tysbPhrYsXESxnMbNqc6k/QivSeF8Oiw8SwwxrHGgsqrsO/uSdSTqaxp8HcQhxOKnwnEY4hiZeYyPhg9jqAMxboD2FSDScaSaLh8yxO8kyYVwjm2d5FiIDG34iRfTrVF+xYw/wCEYflW3k5nfm52zZvW2W3patNwKDERwquJmWaYE5pEQICCSV8o2sLCsvjf2ftHM+J4bjJMDJIbyIEEkDncnlMQFPrrboBeoBu6W9ZLg/DuLLMjYjHwSwi+eNMMEZ7qQvm6WJB+VaSacIM52BA031IA/WlBuhzb/OuXBP3S33Ayn3Ulf6V0MgYBhswDDpp09qdw+EogBNzqSfUkk/rUvYhbkmiiiuDsxvHE++e1ztv3KgkVKw6h5ZE6PELW06If0/So3FYmEr3N7m+nY7flapHDD97FbrHr6WDD+i1tfsXwYV738k+JkDO0uQckDLI2Xyxsgucx+G5U39q8p41hQOJ/bsBimxJhmiaWCANK0cMt+cY8hOZS2e6rsZBe1em4KcPM9wCsgIsRcFRsLHcWDX9zXm/D/wBmuPw+LOLgdIV+0OBDE5DrhXcggMQUzZDop00BvcWrmHpbt1oXxdot/E3jJMbh3wwgkTmsqKGflltV5kUpuDDIL7G42vdTrmeL/sjxceHWWBzJNmIeN3jXLDZeWMxbI2Uqb62II0FrVF8OeHkabHQRY6OeQD7mKTOhxEgdi4kWUKRIACuZTcF73tcVo+OeLZyj8OlijhblIhgeVTIhAFiswYpLe3w+VvTqeLyYW3B2t6PThHDxChjSUZXq2/jy/wAfkw/jvxgMZHDB9mEBw91bSO7WUAaKgKC/MOUeXzCvbv2ecLfDcOw0Mlw4QswO6mRmkyn2z2+VZfwF4YklInxa3jQ3ijlUMxYbP5wSgBGlra+m+w47xnJ91FdpjpZRfL6n1rqOV54RjGNfJj+owx8FkknNSrx+vkznivEiTEEDUIAmnUi5P5m1arw3w/kwgH4m8zehOw+Q/rVd4f8ADpQiWbV9wu9j3Y9TWlFWcRlXKscNkeNwHCy6suJyqpPZeB1OFVPiTGtFh3KErI2WOMhC5V5GCK+QasFzZyOymq8+I3TCQzmPNclJ2s4WJkzLIzhEZlXOhF8tlBubCsh7BqBS3qhm46wxKxLErRExo0vM8weVWZMseWzJZRc5gfNoDahOLu8UUpXKsk8aoFfXI0mW73S2w1A+vWuSS+pprO4nxPkMwCq4jikkQqzWYxuI2RiUsDmIBK5rWbsLv4xxhsObupJXCYiYrGwy3ieAADMt7/ebkgDW4OlpBek001lcDxeaKNITGGmE8sUhkxDOMywviS4k5YLZhbTIoW5AFlAOi4fihLFHKAQJEVwDuA6hgD9ak5O9FYqHxZLlkxBQFGw2BeCEMdGxc00Sl3CXBuY81g1gugJ30/Bca00KyPEYmJYMhvoVZlJBZVJU5cykgEgg2FATqKyfCOJTnEKHZ+W8+MiBYxlCYpHMSIq+ZSI4pNTYHKdyRRw3xg8uH55wpQO2FEN2bK64uRY48zGMWZcwLBcwsRYm9Aa2lFUnF+OfZ2jVgjMzQq6qWzLzplhVh5bZczH4it8ptqKjtxyVoZJTGFRcQIUKSeclcb9mcsGjsoOUHS+jEab0BoDVfxx/Iqjdmv8AJRf/AGqBD4gkbESR/ZwUtiBCwl87vhyiurIVAS7PZTmbbW164YbiYxKLJYLIr8qSO7hosynyOkiqysc3axABBINdQ9yOMntZ2w/EipXWygKpH+Rb3072bp2FadKx+BlCurN8INz+f9bH5VoOC4/mhgRYra5vcEm5PTvf8q7zQrVI4wzvRssqKKKzmgy3F8Oc8jm5GcLr0BQFT7XJHvUWLElCjKbMqhSCvY7j0OlaqfBh81z8ahSLDoSQRfr5vyFY+Qna3p8xvWvDLmVMx5o8rtFlww2kjv8A/bNvmXNX9UPBVJfN0VbflYaf6qt8POHzd1ZlI9ibfUCq8u5bifpMB4u/Zb9vxM2JbEcosqCJUjBsVUAvKdCxJvtY2tr0rQTeBMBKUkmwkTSjKXZQQHcWzFgLBwT/ABDXrWoBoNQ8s3SvYspHNkFrbC1tNNPS21csNhI4/gRVvvYan3O5rvRXNkOKbtoKKKKg6GSQqxUsoJVsyki+VrFbjsbMw+ZrlPw6FwQ0SMCxYggaswsxPckaHvUiloCNLhIQwmMaZ1ACvlGYDUADr+NgP5j3pUwMKg2jQDNzD5dM4ObNbobkm/eus0eYWvbUH5ggj8xXA4EEkljr6C34v/I6+gocty7IZ/hmGGZuVH94CH8oswkN2B9GY3I6muo4fFYDlrojILgHyOQXTX8JKrcdbCuDcLXTzEAbCwtvfba1IeFKd2J+HQ2/CCB+tdUvJxzZP9fydocFCAoWNLIzFbKNGIZXI9SCwJ9TXeKMKoVQAqgBQBYAAWAA6AAVDXhoH4j8QbpuCTr33+lSeT58+ZtrZb+X3y96h12OouT9yIOG4bhCHCQx2ayv5LA8tiVGo1CsWItoCTapmH5axgpYIBmBG2U639utRV4Sunm2dmHlH4zdhUaTw5GbDOwAjEYFlIsMv4bWPw39ya51NHLj8k/D8OhRzIkaKzFiWAF7uczn3Y6nvXNMBhgDEI4wCQClha4GddNhbcW2pkfCFDBs7XDlhcL1NyNvlfe1dMVwlJGzMxsSrFbCxK23uNiFtb1pqRywvcWXh2HcpmjRiuUJdbkcs51AvvlIzDsRepP2GLKU5aZS+crlFi5fmFrfxZ/NfvrVaPDyXBztcAAEhSfKbjpsb6jrU3h/DhEWIYnMFBuB+EWuTuSRUakyjCtGJ/h8IdpOUmdwQ7ZRdgQAQT1uFW/fKO1V+KwqQlFjjVE1kJWwzOqMAD1NgB7C1XT1ScYmHMa3/Tjy/wDc+h/L9KsgrZmye0qMvetD4Yty3sLef/0JVFySUL7KDb121PoNvrVx4VckSDoMpHzB/wBhWjNrAow6TRfUUUViNoVlMfAFnKsbKSTftnF//wCswrV1ReIMOSc9tAtm27kgjvbWrcLqRVmVxK5WaMh1uF0F97gWvf0/SrHh8qc5ytyHAI1/Fdi9xuD02quwMoADX+FrH0DA6/rS5ipuNDGbFh1BN0JHe2hHqavlG9DPF1TNLTqjYTEB1uND1HY/7djXcGsxrTFpKU0lAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFALSikpwoBRReikY1BIxt9dP9tzWc4jOJGdhsSir7LmLH8wf+4VfTk5WykAkZQT0ZtB/SswRY5dCFzKCOuVjmPzNXYVqUZnpQxMOSSFDNfdV6gHr/zWxgw6qWIGrEE/JQoA7Cw/Ws5wd35hC3GYWvpYC417k6kDprc7VqBUZ5O6HDxVWLRRRVBoCq/jOB5qCw8ym6/oR9P0FWFFSnTtENJqmZPFYVoXfLte2ouMp1Qn8xfuvrUeIWXYeVxca2NwbX7C+nzq88QhlUOvUhW9Re4/PT/urPxNl6X0swPUdR7+vcVsxtyjZiyJRnRo1GYpIh0tYi/4egt3DAfnUHF4LGPildZlXD5oroCQ+Vea0vSxLPyF3+APsTrz4fi+WbE3RtQfyzW79GHz971W/v8AvpWecaZphK0YjBcUxiYeLGviTKr4kRSQPHEFCPijh1MTRqrBlup8xa9iNN6l4bx/h3kMaqG/f5FjljeZjAHZg0KnNHmCNlvvoDlJAqbgPCMKFM008sccplihkZOUkhdnDAIilrMxIzFrGx6CpWE8PcosI8TiFjOfLEDFkjaQksyMY8+jMSAWIHa2lcFhDXxUDhRissAQvlzHGRCIC17tKRYNfylLXB9NaMH4q5xwohw7P9ohM1zIgEcauiOWOoYgyC2W9/TelXwfGLP9on53PM/P+55hkMXIPlEfLty/LogPW99am8L8PRYdomRpCYoXhTO17o7rISxtctdBr71IKyDxW7qhXCPeaVosODKo5hjEpldjb7tAIjY6k3GlccTx55GiyZ4iBjUljJBtJAgtqNGAPmB7MParSTwzGYoolklQwOzwyqV5iM/MDHzKVYFZXFipFjRB4ZhUIM0hK8+7MwLO2I/eu5t8R6WsB2tpQjQqj4uGHjwgmCkyx4a7GeMSu0uRCyQnzSAM12Olhe17VOHiU84p9nfljE/ZjNnW3MIBUhNyhJCk9CdiLmmS+DYTa0syrlw4ZFZLOcMVMJYlC1xlFwCAe1WP+Bx66triRiTqP3gKkDb4fKNN/WhOhRSeI5ZcRg8kTxwSYqeMyFktIsUOJBDJ8SgvGGXe4TW2gM/hPifnNBmgaOPEqzYaQupzhVzgMg1QsgZwNdFN7HSlw3hOJJklEs5WKWSWKEsvKjaVZBJYZcxB5rnzMbdLC4PThfheKB42EszrCrLh4nZTHArCxCWUMfKAoLliBoLXNCDhJ4nKyMDh2ESYlcM02ddJHKKhCblc0iAnS19iK5p4sYgkYVzmxL4WD7xBzZY3lWQ/5IwsLtmOvlIttdcJ4WvNLLLLJkOL+0LCrjlMVEfKdgVzBgyXsGtcAkGpreGouSIg8qlZ5MRHIpXmRyyPK7Mt1KkffOtiCLGxvUAj4XxUhkWKSJom5ssMhZgVjmjiE4XMPiV4iXDafDYgHSqv/wCY+HBTMgS6wsyvNGsoE9jHkiY5pSEZHa1rBrDMQRUvjvg8S4NsMjMzS4iOWaaR7SHzoJnuigZjCrIAABY20FWsvAF53NimmgzZOYkXLyScsBUzB0YqcoC3QqSAOwoSV+N8STGDFTQYbMkK4hUkaRQGkgzK/k3yZkYA3ucuwBvXRPEc1kjGELz8gTyosqhVjJKpZmHmdyrWWwHlNyOsmPwzGDKBLNypeaWw+ZeVmmzc1h5c9yWY2LEAm4Ari/hQWS2LxKusZhaVWiDyQ5iwjf7rLZbmzKAwuddTQDcD4sjnniijTyywxzqzyKjMkgYjlxnWTLl81j5bjetATf0/p61SSeGos8FpJRFh8hiw4MfKUxLlRgcnM26Z7HtXfjGIa3LCmxtncoSouRpfbSpSt0cykkrIeL4iWk8vwg+T5Doe579L+9Q30IW4OUa22zMSzW9BcD5Uj+ba4A0Uel9z6nc+9dMLhs7BF0udT2A3P0/O1a1FRVmNycmW/h/CaGUjfRfbqfmfyHrV1TY0CgKBYAWA7AbU6scpczs2wjyqgooork6CiiigOWJgDqUOxFvbsR6jestxHAtEwB1B+Frb+luhFa6uGNwqyoVb5HqD0IqzHk5X9irJjU19zHxygaG+U6+qt0YfoR1FWmAxrIMhsbar7amynsdx9PaDisE6XzDY2J1trsb9j9Qd9xduDzMCuUMALgE2O+uVuh/KtMkpKzLG4ujTxShgGU3BFx/fT1FdkN6oOHYsoctwQ2qk6a7XOmmvlbsR61dK+wPlPY7+vv7jSs8o0zXGVoy3H/FEgYJBFKFXHYbDyT/dcu7TQiVLM2e2VymYLvt3qXhPGUEmIEAU2aWSFHzxHNLEGLgxh+Yq/dyAMVAOX1W5N4UV5C/2iZYziI8SYByuXzo2Rr3KZ8pMYJXNa5JFSuH+HRBKXjnkEZkkk5OSErmkLM4zmPmZc7s1s2h0vbSuDsh8R8QPhpcYsvmWPDricOALMygFJIx/E3NVP/3KO1csJ4nZFVZopH5bxQYnEqIxEMS4jDAJmzlA8iqWCkAt1sSLTjvhyHFvBJIWBhcOApADgMj5H01TPFE1u6Co2J8Ko8jNz5RE8yTyYf7vltKhQg5imcDNGjFQ1iV9TcDh4d44ztypCWd8Vj0RrABUw+IZVU2/ylQPbWkfxeCIuVhppWlilmCqYgVSF1R8xdwL3YWte96kP4WUWMc80TrPiJhIvLJviWZpUs6FSt200uMo17u4Z4Yig5JV5G5UEsClipLJLJHIzMbateMa+poCNh/E0kk6rFhnkgfCJiEdWjDEPcqMruN7BbG2vW2tN/8AjKMRzOYZM0LwI0aNFIT9okEceVkcqTmJBBIIt6gl7+DozFHCJplRcIcG4GT72HJlGYlLqw3utvpRh/B0YEmaaRzIcKT5YkC/ZJebEFWNAACdD6bWoNDpHxtxJMDFLnjhw8hgJgATmvMpPNLgH92S1zYAC1ySKZD4uR0iMcEkkkk0kKxI0RIaIMZGMmfJkAUG+bXMBvtI4x4XjxDyuzurSDDbZCFOFleWM5WUhrtIbg3BAG1cY/CKqqZMTMsqTSTLMBDmzSqVkUpy+WUIO2XSw7UFELgHiiRoYgYZZ8RLJjGEY5SskUOJePzlmCAqGiSwJufmaliXE4vlT4aXlQMsVwwHMBE2acMpUgMFi5Vs1vvXP4Rd0Pg9Y1j5OJnjkj54Ew5TOy4iXmyq4dCrefKQbA+Udze24XgUw0KQx3yoLAsbsdSSzHqSSST60BOpjNTS1cJpwGyGw0uWJAAHS5vuf6VKIbFxEuVGe4FupFxe9thv7d6osTjWexc3HxIml2NjlJsNFvrrv+dP4ji1fQD7pNLbZ27f3sL9xURQT5iQLnVm0Gm9vYaWHoKvhBLVmbJkt0hq6D2FaTg2A5a5m+Nt/QdAKgcN4WWZXJug1F0tmPTRtQvqRc9LbnQ1zmyXojvDjrVhRRRWc0BRRRQBRRRQBRRRQEbF4bOLqcrdDa4Poy/iX0+lqzcq5GKlQD1jJ0N/xQv2P8DfLUVrai4/ArKuVh7HqK7hKtyucL2MoJw1wQRrcEjY7NcevX11qfBxKRRrZ1CgHzBh1sSRqp1tcjoKi4vBvCfNtfRtcp6DXodtD+e9cmBBBGh3vsdf6VrcYyMicos0UWPQrmJC9wTqNbdNx61KNZTMOqL7oSp+huvytXUTWsBJKO2mg/0tcfKqnhLVm8mmBpwYVRQcQl9JPbU/lZvqKkf4sw3hYdyb2+rJXDxssWSJbXFF6gYfiSMLkqp7Nt/qsBXZcSpbKLE9MpB076G4HS5rhprc7Uk9iTelBqIcVGDbmID/ADrXWNw2qnMP8pB/MGhNnYmmFqh4niMSEgsCRuF1t7k6VDl4qzA5FsP4ydvYmwX866UGzl5Ei0eYA2LAHsSAf1vUTF8SWM5cpJ+gPsdSapZXzam7k7m9l+VxdvemgkXyjIDvYkk+l+3oKtWEpebwWDcXuN7E7Kgu3zdr/RVvVfLv5lu51ILGyjoCdyx666aU1SRcB2F97G36U/C4dnOWNb236AfzHp+tdqCjqVOblocDdjt6AAaD0UCr/hXBgLPJqei7hR0v3OpPbXrvUnhvCxGcxbM1uwsPa+v5/KrGqcmW9I7F+PDWstwoooqg0BRRRQBRRRQBRRRQBRRRQBRRRQCMoOh1FQ8TwuJ1Ay5baKV0sO3a3odKm0VKbWxDSe5mpOCTXIGUi+jFrXHsAbGq/FRvG2VhY+psPrtb1ra1xxWFSRcrqGHr+oPQ+tXRztblE+HTWhjJYnUgMrAnUeXU+1t/lXSQFTYOSR1BI/I6j2NXjeHUsAJJBba5BA+RFMl4G5/62bUnzr37WOg+VWdaL3KuhJbFKX9B7jQ/lofpUnDY51FkZfY5Rr63H9afLwOUbAN/K3/laos+FkG8bD3U2+oFqsuEjipx7HUkhi33UXpowv3VRmy/KmSyA+bmOW6MFsB87g/lUPm200roAdyankRHMSMPOQMv3Og0LgXHrc6k1yAuSb5vW2lzvYUKb7a+ii5+gqyw3CJWNmGQDqbG/sAf9qhuMSUpS0K9iafFC7/CjH1ANvrtV0vAF6yN8go/UGrLCYflrlDM2u7tc/XtVUs6WxdHA+5S4DgrEgyaD+G+p+anSr2KJVFlAAGwAsKfRVEpuW5fGCjsFFFFcHYUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUAUUUUIK7ilVyb0UVctjPLcvML8NdqKKrluXw2CiiiuToKKKKAKKKKAKKKKAKKKKAKKKKA/9k="
                    />
                  </Grid>

                  <Grid
                    className={styles.login__title}
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <Typography variant="h5">Iniciar Sesión</Typography>
                  </Grid>

                  <form onSubmit={handleSubmit}>
                    <InputText
                      id="username"
                      name="username"
                      styleInfo="login__username-input"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Username"
                      error={errors.username && touched.username}
                    />

                    {errors.username && touched.username && (
                      <ErrorMessage id="username-error" content={errors.username} />
                    )}

                    <InputPassword
                      id="password"
                      name="password"
                      styleInfo="login__password-input"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label="Password"
                      error={errors.password && touched.password}
                    />
                    {errors.password && touched.password && (
                      <ErrorMessage id="password-error" content={errors.password} />
                    )}
                    {this.state.isTheLoginEnded && !this.state.isTheLoginSuccessful && (
                      <ErrorMessage
                        id="fail-submit-error"
                        content="Usuario o contraseña incorrectos."
                      />
                    )}
                    <br />
                    <br />
                    <ButtonA
                      id="sign-in"
                      name="sign-in"
                      type="submit"
                      content="Ingresar"
                    />

                    {this.state.isTheLoginSuccessful && <Redirect to='/home' />}
                  </form>
                  <br />
                  <br />
                </Container>
              </Paper>
            </Container>
            
          </>
        )}
      />
      </Grid>

    );
  }
}