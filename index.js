$(function(){

	/*$("#createbutton").on("click", function(){

 		var text = $("#create-text").val();

	 	var importance = $("#create-importance").val();

	 	var task = $("<br>" + "<input type='checkbox'>" + "<label class='text " + importance + "'>" + " " + text + importance + "</label>")

		$(".task").append(task);

		$(task).val("");

		$("#create-text").val("");

})
})*/

	$("#create-btn").on("click", function(){

		var createText = $("#create-text").val();

		var createImportance = $("#create-importance").val();

		var newTask = $(".task").val();

		createText.append(createImportance)

		createImportance.append(newTask)

		$("#create-text").val("");


	});

/*$(function(){

	$("#show-completed").on("click", function(){

	var checked = $("<input type='checkbox' checked>")

	var unchecked = $("<input type='checkbox'>")

	if ($(checked).prop("checked", true)){

		$(checked).show();

	} else if ($(unchecked).prop("unchecked", true)){

		$(unchecked).hide();
	}
})
})*/

$(function(){

   var checked = $("<input type='checkbox' checked>" + "<div class='task'>")

	var unchecked = $("<input type='checkbox'>"+ "<div class='task'>")

	if ($("input").parent().prop("checked", true)){

		$(checked).show();
		$(unchecked).hide();

	} else {

		$(unchecked).show();
		$(checked).hide();
	}

	/*if ($("#show-completed").attr("unchecked", true)){
	/*
	var checked = $("<input type='checkbox' checked>" + "<div class='task'>")

	var unchecked = $("<input type='checkbox'>"+ "<div class='task'>")*/

	/*$("input").prop("checked", true).show();

	} else {

		$("input").prop("unchecked", true).hide();


	}*/
})








