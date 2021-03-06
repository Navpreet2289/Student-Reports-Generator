// Student import controller
app1.controller('studentsController', function ($scope, studentService) {

	$scope.textAreaContent = "";

	$scope.parseNames = function () {
		$scope.textAreaContent = document.getElementById("textArea").value;
		if ($scope.textAreaContent != ''){
			var separated = $scope.textAreaContent.split(/\r?\n/);
			console.log(separated);

			for (n in separated) {
				if (separated[n] != ''){
					var split = separated[n].split(' ');
					$scope.names.push({
						fName: split[0],
						lName: split[1],
						gender: null,
						report: null
					});
				}
			}
		}

		//Clear the box
		document.getElementById("textArea").value = "";
		$scope.textAreaContent = "";
	};

	//Student list manipulation
	$scope.names = studentService.list;
	$scope.setSelectedStudent = function(index) {
		studentService.currentStudent = index;
	}
	$scope.getSelectedStudent = function() {
		return studentService.list[studentService.currentStudent];
	}
	$scope.removeStudentAtIndex = function(index) {
		studentService.removeStudentAtIndex(index);
	}

	//Adding students to the list
	$scope.itemsToAdd = [{
		fName: "",
		lName: ""
	}];

	$scope.add = function (itemToAdd) {
		var index = $scope.itemsToAdd.indexOf(itemToAdd);
		$scope.itemsToAdd.splice(index, 1);
		$scope.names.push(angular.copy(itemToAdd));
		$scope.addNew();
	};

	$scope.addNew = function () {
		$scope.itemsToAdd.push({
			fName: "",
			lName: ""
		})
	};
});
