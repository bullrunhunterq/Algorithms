/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  // 新链表
  var newList = null;
  // 新链表尾节点，用于向后连接的
  var temp = null;

  const handleLink = (curList) => {
    // 第一次是用newList连接，后续使用temp的next属性连接
    if (temp) {
      temp.next = curList;
    } else {
      newList = curList;
    }
    temp = curList;
  }

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      handleLink(list1)
      list1 = list1.next;
    } else {
      handleLink(list2)
      list2 = list2.next;
    }
  }

  // 结束后如果某个链表还有剩余
  if (list1) {
    temp.next = list1;
  } else if (list2) {
    temp.next = list2;
  }
  return newList;
};

mergeTwoLists(list1, list2);


/**
 * 和上面差不多，递归，就不需要维护新链表的尾了。
 * @param {*} l1 
 * @param {*} l2 
 * @returns 
 */
var refMergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};