function skillsMember() {
  return{
    restrict: 'E',
    templateUrl: 'app/components/member/member.html',
    controller:"SkillMemberController",
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}