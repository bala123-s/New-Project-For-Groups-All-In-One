 const emails = api.map((val) => val.email);
        let inputEmail = userDeatails.email;
        let users = api.find((val) => val.email === inputEmail).name;
        if (emails.includes(inputEmail)) {
            user.push(users);
            navigate("/home", { state: { user } });
        } else {
            alert("you entered different email, please choose correct one")
        }
        setUserDeatails({
            email: "",
            password: "",
        })
