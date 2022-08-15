import React from "react";
import WardsReport from "./Parent/WardsReport";
import Report from "./Staff/Reports";

export default function ReportView(){
    // Renders based on the state
    const [type, setType] = React.useState(null);
    React.useEffect(() => {
		// Anything in here is fired on component mount.
		let typeO = localStorage.getItem('type');
		setType(typeO)
		document.getElementsByTagName('body')[0].setAttribute('id', typeO);
	}, []);
    return (
       type == "staff" ? <Report /> : type == "parent" ? <WardsReport /> : null
    )
}