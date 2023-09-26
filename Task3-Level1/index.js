window.addEventListener("DOMContentLoaded", () => {
    let oper = document.getElementsByClassName("Operator")
    let arr = document.getElementsByClassName("Number");
    let st = "";
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click", () => {
            st = document.getElementsByClassName("Screen")[0].innerHTML
            if (st[0] === '0')
                st = ""
            st += arr[i].innerHTML
            document.getElementsByClassName("Screen")[0].innerHTML = st;

        })

    }
    for (let i = 0; i < oper.length; i++) {
        st = document.getElementsByClassName("Screen")[0].innerHTML

        oper[i].addEventListener("click", () => {
            if (oper[i].innerHTML === "=") {
                st = document.getElementsByClassName("Screen")[0].innerHTML
                st = math.evaluate(st)

            }
            else if(oper[i].innerHTML === "Del")
            {
                
                st=st.substr(0,st.length-1)
            }
            else{
                st="0"
            }

            document.getElementsByClassName("Screen")[0].innerHTML = st;

        })

    }


})