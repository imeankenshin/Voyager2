
<script lang="ts">
  import Menu from "./Menu.svelte";
  import Drawer from "../../components/Drawer/Drawer.svelte";
  let open:boolean = false;
  const list:{link:string,title:string}[] = [
    {
      link: "/",
      title: "home"
    },
    {
      link: "/docs",
      title: "docs"
    },
    {
      link: "/catalog",
      title: "catalog"
    },
    {
      link: "https:/components.advenccre.design",
      title: "components"
    },
  ]
</script>


<header>
  <nav class="z-50 grid [&_*]:outline-none grid-cols-2 fixed top-0 left-0 w-full justify-between bg-gradient-to-b from-white dark:from-slate-800 to-transparent px-4 py-3">
    <a class="logo flex items-center" href="/">
      <img class="h-10 mr-2 translate-y-[2px] hover:animate-bounce" src="/image/Advenccre.svg" alt="Advenccre icon">
      <span class="font-semibold text-lg sm:text-2xl font-marker hover:animate-pulse">The Advenccre</span>
    </a>
    <Menu {list} class="hidden md:flex md:justify-end items-center" />
    <div class="md:hidden items-center flex justify-end">
      <button type="button" class=" w-9 h-9 m-3 text-2xl text-center font-['SF_Pro'] rounded" on:click={()=>open=true}>􀏛</button>
      <Drawer bind:open={open}>
        <Menu {list} class="py-6 [&_*]:text-2xl [&>li]:mb-4"/>
      </Drawer>
    </div>
  </nav>
</header>