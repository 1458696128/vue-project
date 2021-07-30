<template>
  <div id="search" class="main">
    <section id="searchItem">
      <Header title="搜索"></Header>
      <from class="search-from">
        <input
          type="search"
          name="search"
          placeholder="请输入商家或美食名称"
          class="search_inputl"
        />
        <input type="submit" name="submit" class="search_inputr" />
      </from>
      <div class="searchcontent"></div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped >


.search-from {
  position: relative;
  top: 60px;
  left: 0px;
  width: 100%;

  .search_inputl {
    width: 283px;
    height: 35px;
    margin: 0px 4px;
    background-color: #F5F5F5;
    border-radius: 2px;
    outline: none;
    border: none;
  }

  .search_inputr {
    width: 64px;
    height: 35px;
    margin-right: 5px;
    background: green;
    border-radius: 5px;
  }
}

.searchcontent {
  position: absolute;
  top: 110px;
  left: 0px;
  height: 510px;
  width: 100%;
  background-color: #F5F5F5;
}
</style>
