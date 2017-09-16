$friendRequest = $('#fbProfileCover .actionsDropdown .FriendRequestAdd:first');
$speechBubble = $('.clippy-text');

if ($friendRequest.hasClass('hidden_elem') === false) {
    $friendRequest.click();
    $speechBubble.html('I see you are interested in this person. I\'ve sent them a friend request! You\'re welcome. :)');
}
