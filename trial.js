var current = null;
            for (var state in aus) {
                aus[state].color = Raphael.getColor();
                (function (st, state) {
                    st[0].style.cursor = "pointer";
                    st[0].onmouseover = function () {
                        current && aus[current].animate({fill: "#333", stroke: "#666"}, 500) && (document.getElementById(current).style.display = "");
                        st.animate({fill: st.color, stroke: "#ccc"}, 500);
                        st.toFront();
                        R.safari();
                        document.getElementById(state).style.display = "block";
                        current = state;
                    };
                    st[0].onmouseout = function () {
                        st.animate({fill: "#333", stroke: "#666"}, 500);
                        st.toFront();
                        R.safari();
                    };
                    if (state == "nsw") {
                        st[0].onmouseover();
                    }
                })(aus[state], state);
            }
        };