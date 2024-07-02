const { response } = require("express");

console.log("Users frontend javascript file");

$( () => {
    $(".member-status").on("change", (e) => {
        const id = e.target.id;
        console.log("id:", id);

        const memberStatus = $(`#${id}.member-status`).val();
        console.log("memberStatus:", memberStatus);

        axios.post("/admin/user/edit", {
            _id: id,
            memberStatus: memberStatus,
        })
        .this((response) => {
            console.log("response:", response);
            const result = response.data;
            console.log("result:", result);

            if (result.data) {
                console.log("User updated!");
                $(".member-status").blur();
            } else alert("User update failed!");
        })
        .catch((err) => {
            console.log(err);
            alert("User update failed!");
        });
    });
});
